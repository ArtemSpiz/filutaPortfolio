// Email notification endpoint for lead form submissions
import { defineEventHandler, readBody, createError } from 'h3';

interface LeadData {
  fullName: string;
  email: string;
  company: string;
  companySize: string;
  product: string;
  stack: string;
  hasAutomation: string;
  hasApis: string;
  challenges: string;
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody<LeadData>(event);

  // Validate required fields
  if (!body.fullName || !body.email || !body.company) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields',
    });
  }

  const notificationEmail = config.notificationEmail || 'info@filuta.ai';
  const resendApiKey = config.resendApiKey;

  // If no Resend API key is configured, just log and return success
  // (form data is already saved)
  if (!resendApiKey) {
    console.log('Email notification skipped: RESEND_API_KEY not configured');
    console.log('Lead submitted:', body.fullName, body.email, body.company);
    return { success: true, message: 'Lead saved (email notification not configured)' };
  }

  // Build email content
  const emailHtml = `
    <h2>New Lead Submission from Filuta AI Website</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.fullName)}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
        <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.company)}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company Size</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.companySize)}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Type of System</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.product)}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Game Engine</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.stack) || 'Not specified'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Has Automated Testing</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.hasAutomation)}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Has API/SDK</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.hasApis)}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">QA Challenges</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(body.challenges)}</td>
      </tr>
    </table>
    <p style="margin-top: 20px; color: #666;">
      This lead was submitted via the Filuta AI website contact form.
    </p>
  `;

  try {
    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Filuta AI <noreply@filuta.ai>',
        to: [notificationEmail],
        subject: `New Lead: ${body.fullName} from ${body.company}`,
        html: emailHtml,
        reply_to: body.email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      // Don't throw - the lead is already saved
      return { success: true, message: 'Lead saved (email notification failed)' };
    }

    const result = await response.json();
    return { success: true, emailId: result.id };
  } catch (error) {
    console.error('Error sending notification email:', error);
    // Don't throw - the lead is already saved
    return { success: true, message: 'Lead saved (email notification error)' };
  }
});

// Helper function to escape HTML entities
function escapeHtml(text: string): string {
  if (!text) return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
