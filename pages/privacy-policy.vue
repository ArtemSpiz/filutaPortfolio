<template>
  <div class="min-h-screen bg-dark-950 pt-32 pb-20">
    <div class="container max-w-4xl mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-ibm font-medium text-white mb-12">Privacy Policy</h1>

      <div class="space-y-10 text-gray-300 font-ibm">
        <!-- Section 1 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">1) Identification of Data Controller</h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              This Privacy Policy regulates the relations between the parties, on the one hand Filuta AI Inc. as a data controller ("Filuta AI" or "Administrator") and, on the other hand you, our customers, job applicants, or our business partners.
            </p>
            <p>
              Filuta AI CZ s.r.o. with registered office at Sokolovská 131/86, Karlín, 186 00 Praha, identification number 09745424 as part of Filuta AI Inc. (incorporated in Delaware) with a mailing address at 1606 Headway Cir STE 9145 Austin, TX 78754, US.
            </p>
            <p>
              In writing to Filuta AI CZ s.r.o. at Sokolovská 131/86, Karlín, 186 00 Praha, Czech Republic
            </p>
            <p>
              By e-mail <a href="mailto:dpo@filuta.ai" class="text-brand-secondary hover:underline">dpo@filuta.ai</a>
            </p>
          </div>
        </section>

        <!-- Section 2 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">2) Purpose and Legal Basis of Processing</h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              The purposes for which we process personal data can be divided into the following main areas: order processing, provision of service and support, billing, and informing the client about product updates.
            </p>
            <p>
              We only process your personal data for the purposes for which they have the relevant legal basis for processing. Legal basis for processing personal data:
            </p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>If it is necessary for the performance of a contract concluded with you or for the performance of pre-contractual measures at your request.</li>
              <li>Performance of the contract</li>
              <li>If it is necessary for the performance of our legal obligation</li>
              <li>To protect our rights and legitimate interests</li>
              <li>Based on your consent</li>
            </ul>
          </div>
        </section>

        <!-- Section 3 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">3) Legitimate Interests</h2>
          <p class="leading-relaxed">
            Filuta uses the legitimate interest of the controller for direct marketing with our clients. At the end of each email campaign, Filuta allows you to unsubscribe from such mailings.
          </p>
        </section>

        <!-- Section 4 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">4) Recipients of Personal Data</h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              Our colleagues and specialists process your personal data so that we are able to provide you with the best possible service. We then pass on personal data to the following types of entities:
            </p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>IT service providers who run servers and other software for us.</li>
              <li>Companies that handle our accounting and related paperwork.</li>
              <li>To external collaborators who are involved in the smooth running of customer care and with whom our company has signed GDPR data processing agreements.</li>
            </ul>
          </div>
        </section>

        <!-- Section 5 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">5) Retention Period</h2>
          <div class="space-y-4 leading-relaxed">
            <p>
              We process personal data relating to the conclusion and performance of the contract and customer care for the duration of the contract, and for the period for which we are obliged to retain such data under generally binding legal regulations, and we also retain it for the period necessary in case we have to provide evidence in legal or administrative proceedings, but always no later than the expiry of the relevant statutory limitation periods.
            </p>
            <p>
              Personal data that we process on the basis of your consent are processed for the period for which you have given your consent, or until you withdraw your consent.
            </p>
            <p>
              In accordance with the principle of data minimization, we always process only the personal data that we strictly need for the purpose and keep it for as long as necessary. Once the time period has elapsed, the personal data is deleted or anonymized.
            </p>
          </div>
        </section>

        <!-- Section 6 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">6) Rights of the Data Subject</h2>
          <div class="space-y-4 leading-relaxed">
            <p>What other rights do you have in relation to the protection of personal data?</p>
            <ul class="list-disc list-inside space-y-2 pl-4">
              <li>The right to obtain confirmation as to whether or not personal data relating to you are being processed and, if so, the right to access that personal data and other information.</li>
              <li>The right to rectification, i.e. for us to correct inaccurate personal data relating to you without undue delay.</li>
              <li>The right to have us restrict the processing of personal data or erase it if the conditions for this are met.</li>
              <li>The right to update your personal data with the recipients, i.e. to notify the recipients to whom your personal data has been disclosed of any rectification or erasure of personal data or restriction, if the conditions are therefore met.</li>
              <li>The right not to be subject to any decision based solely on automated processing, including profiling, which has legal effects on you or affects you, unless such processing is permitted by EU or Czech law.</li>
              <li>The right to lodge a complaint about our practices with a supervisory authority, which in the Czech Republic is the Office for Personal Data Protection based in Prague.</li>
              <li>Portability? Due to possible processing by consent and automated processing</li>
            </ul>
            <p>
              If you believe that your rights related to the processing of your personal data have been affected, you can file a complaint with the Data Protection authority (<a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" class="text-brand-secondary hover:underline">www.uoou.cz</a>).
            </p>
          </div>
        </section>

        <!-- Section 7 -->
        <section>
          <h2 class="text-2xl font-medium text-white mb-4">7) Automated Decision-Making</h2>
          <p class="leading-relaxed">
            There is no decision-making based on automated processing.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
definePageMeta({
  title: 'Privacy Policy',
  description: 'Filuta AI Privacy Policy - Learn how we collect, use, and protect your personal data.',
});

// Use SEO composable
import { setupPageSEO } from '../composables/usePageSEO';

setupPageSEO({
  title: 'Privacy Policy | Filuta AI',
  description: 'Filuta AI Privacy Policy - Learn how we collect, use, and protect your personal data.',
});
</script>
