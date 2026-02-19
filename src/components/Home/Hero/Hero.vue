<script setup>
import ColorButton from '@/components/ui/ColorButton/ColorButton.vue';
import TransparentBtn from '@/components/ui/TransparentBtn/TransparentBtn.vue';
import heroMobLight from '@/assets/img/lightMobHero.png';
import herolightBlue from '@/assets/img/heroLightBlue.png';

import { ref } from 'vue';
import { useQuestionnaire } from '~/composables/useQuestionnaire';

const { showQuestionnaire, openQuestionnaire, closeQuestionnaire } = useQuestionnaire();

const scrollToNextSection = () => {
  const problemsSection = document.getElementById('problems');
  if (problemsSection) {
    problemsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const isSubmitting = ref(false);
const submitError = ref('');

const form = ref({
  fullName: '',
  email: '',
  company: '',
  companySize: '',
  product: '',
  stack: '',
  hasAutomation: '',
  automationTools: '',
  hasApis: '',
  challenges: '',
  source: '',
});

const submitForm = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitError.value = '';

  try {
    console.log('Submitting form with data:', form.value);

    // Save lead (mock API)
    const result = await $fetch('/api/leads', {
      method: 'POST',
      body: form.value,
    });
    console.log('Lead created successfully:', result);

    // Send email notification (non-blocking)
    try {
      await $fetch('/api/leads/notify', {
        method: 'POST',
        body: form.value,
      });
    } catch (emailError) {
      // Don't fail the form submission if email notification fails
      console.warn('Email notification failed:', emailError);
    }

    window.open(
      'https://calendly.com/d/csdb-ssn-dp5/meeting-with-filuta-ai',
      '_blank',
      'noopener,noreferrer'
    );

    closeQuestionnaire();
    form.value = {
      fullName: '',
      email: '',
      company: '',
      companySize: '',
      product: '',
      stack: '',
      hasAutomation: '',
      automationTools: '',
      hasApis: '',
      challenges: '',
      source: '',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    submitError.value = error.message || 'Failed to submit form. Please try again.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="h-screen bg-no-repeat relative max-lg:bg-none max-lg:h-full overflow-hidden">
    <div class="absolute top-0 left-[-100px] pointer-events-none opacity-80 mix-blend-screen blur-[2px]" style="mask-image: radial-gradient(ellipse 80% 80% at 30% 50%, black 40%, transparent 70%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 30% 50%, black 40%, transparent 70%);">
      <img :src="heroMobLight" alt="heroLight" class="w-auto h-auto max-w-none scale-125" />
    </div>
    <div class="absolute bottom-0 right-[-100px] pointer-events-none max-sm:hidden opacity-60 mix-blend-screen blur-[3px]" style="mask-image: radial-gradient(ellipse 80% 80% at 70% 50%, black 30%, transparent 65%); -webkit-mask-image: radial-gradient(ellipse 80% 80% at 70% 50%, black 30%, transparent 65%);">
      <img :src="herolightBlue" alt="heroLight" class="w-auto h-auto max-w-none scale-125" />
    </div>
    <div
      class="heroContainer container flex flex-col !items-start justify-center gap-16 max-lg:gap-8 max-lg:w-full max-lg:justify-center max-lg:h-full max-lg:!items-center"
    >
      <div class="flex flex-col items-start gap-8 w-full max-lg:justify-center max-lg:items-center">
        <div
          class="flex flex-col items-start gap-6 w-full max-lg:justify-center max-lg:items-center"
        >
          <div class="HeroTitle max-lg:text-center">
            Autonomous AI Testing<br>Powered by Synthetic Reasoning
          </div>
          <div class="HeroSubtitle max-lg:text-center">
            Our agents interact with your product as a real user would, ensuring a flawless experience before it reaches your customers.
          </div>
        </div>
      </div>
      <div class="flex items-start gap-6 max-md:flex-col">
        <ColorButton class="bg-bg-purple-button" @click="openQuestionnaire" />
        <TransparentBtn class="max-md:w-full" @click="scrollToNextSection" />
      </div>

      </div>

    <div
      v-if="showQuestionnaire"
      class="fixed inset-0 pointer-events-auto z-[100] bg-black/40 flex items-start justify-center px-4 overflow-y-auto"
    >
      <div
        class="relative bg-white w-full max-w-[1100px] mt-12 mb-12 rounded-lg px-16 max-md:px-6 py-14 max-md:py-10"
      >
        <button
          class="absolute top-6 right-6 max-md:top-4 max-md:right-4 text-2xl text-black/60 hover:text-black"
          @click="closeQuestionnaire"
        >
          ✕
        </button>

        <h2
          class="text-4xl font-medium text-center mb-14 max-md:mb-8 max-md:text-3xl text-black font-ibm"
        >
          Tell us something about you
        </h2>

        <form class="space-y-10 max-md:space-y-4 text-black font-ibm" @submit.prevent="submitForm">
          <!-- Error message -->
          <div
            v-if="submitError"
            class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md"
          >
            {{ submitError }}
          </div>

          <div class="grid grid-cols-2 gap-10 max-md:gap-4 max-md:grid-cols-1">
            <div>
              <label class="block mb-2 font-medium">* Full name</label>
              <input
                v-model="form.fullName"
                required
                :disabled="isSubmitting"
                class="w-full h-14 bg-gray-100 px-4 rounded-md outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">* E-mail</label>
              <input
                v-model="form.email"
                type="email"
                required
                :disabled="isSubmitting"
                class="w-full h-14 bg-gray-100 px-4 rounded-md outline-none disabled:opacity-50"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-10 max-md:gap-4 max-md:grid-cols-1">
            <div>
              <label class="block mb-2 font-medium">* Company</label>
              <input
                v-model="form.company"
                required
                :disabled="isSubmitting"
                class="w-full h-14 bg-gray-100 px-4 rounded-md outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label class="block mb-2 font-medium">* Company size</label>
              <select
                v-model="form.companySize"
                required
                :disabled="isSubmitting"
                class="w-full h-14 bg-gray-100 px-4 rounded-md outline-none disabled:opacity-50"
              >
                <option disabled value="">– select –</option>
                <option>1–10 employees</option>
                <option>11–50 employees</option>
                <option>51–200 employees</option>
                <option>201–500 employees</option>
                <option>501–1,000 employees</option>
                <option>1,001–5,000 employees</option>
                <option>5,001–10,000 employees</option>
                <option>10,000+ employees</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-10 max-md:gap-4 max-md:grid-cols-1">
            <div>
              <label class="block mb-1 font-medium">Game engine</label>
              <p class="text-sm text-gray-500 mb-2">Unity, Unreal, Godot, …</p>
              <input
                v-model="form.stack"
                :disabled="isSubmitting"
                class="w-full h-14 bg-gray-100 px-4 rounded-md outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label class="block mb-1 font-medium">* Type of system</label>
              <p class="text-sm text-gray-500 mb-2">HMI software, enterprise software, Video game, …</p>
              <input
                v-model="form.product"
                required
                :disabled="isSubmitting"
                class="w-full h-14 bg-gray-100 px-4 rounded-md outline-none disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label class="block mb-1 font-medium"> * Do you already have automated testing? </label>
            <p class="text-sm text-gray-500 mb-2">If yes, which tools do you use?</p>
            <textarea
              v-model="form.hasAutomation"
              rows="4"
              required
              :disabled="isSubmitting"
              class="w-full bg-gray-100 px-4 py-3 rounded-md outline-none resize-none disabled:opacity-50"
            />
          </div>

          <div>
            <label class="block mb-1 font-medium"> * Do you have API/SDK in your system? </label>
            <p class="text-sm text-gray-500 mb-2">e.g. used for testing or debugging</p>
            <textarea
              v-model="form.hasApis"
              rows="4"
              required
              :disabled="isSubmitting"
              class="w-full bg-gray-100 px-4 py-3 rounded-md outline-none resize-none disabled:opacity-50"
            />
          </div>

          <div>
            <label class="block mb-2 font-medium"> * What are your biggest QA challenges? </label>
            <textarea
              v-model="form.challenges"
              rows="4"
              required
              :disabled="isSubmitting"
              class="w-full bg-gray-100 px-4 py-3 rounded-md outline-none resize-none disabled:opacity-50"
            />
          </div>

          <div class="flex justify-center pt-6 max-md:pt-3">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-bg-purple-button text-white px-10 py-4 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              {{ isSubmitting ? 'Submitting...' : 'Continue to booking' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
