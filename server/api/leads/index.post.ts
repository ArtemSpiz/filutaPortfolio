import { defineEventHandler, readBody, createError } from 'h3';
import { createLead } from '../../utils/mock-data';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.fullName || !body?.email || !body?.company) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields: fullName, email, company',
    });
  }

  const result = await createLead(body);
  return result;
});
