<script setup>
import SecurityIcon1 from '@/assets/svg/SecurityIcon1.vue';
import SecurityIcon2 from '@/assets/svg/SecurityIcon2.vue';
import SecurityIcon3 from '@/assets/svg/SecurityIcon3.vue';
import SecurityIcon4 from '@/assets/svg/SecurityIcon4.vue';
import SecurityIcon5 from '@/assets/svg/SecurityIcon5.vue';
import SecurityIcon6 from '@/assets/svg/SecurityIcon6.vue';
import Section from '@/components/ui/Section/Section.vue';
import lightLeft from '@/assets/img/lightLeftSecur.png';
import lightRight from '@/assets/img/lightRightSecur.png';

const SecurityCards = [
  {
    icon: SecurityIcon1,
    title: 'No LLMs on your data',
    subtitle:
      'Filuta uses its own symbolic synthetic-reasoning engine only. We don’t send your data to third-party LLMs, store prompts, or reuse your data between runs.',
  },
  {
    icon: SecurityIcon2,
    title: 'Strict need-to-know access',
    subtitle:
      'Access to identifiable customer data inside Filuta is compartmentalised. Only a small, vetted team can see it, and only when it’s required to support you.',
  },
  {
    icon: SecurityIcon3,
    title: 'Strong encryption in transit and at rest',
    subtitle:
      'All data is protected with modern TLS during transfer and industry-standard encryption at rest (such as AES-256), with secure key management.',
  },
  {
    icon: SecurityIcon4,
    title: 'Isolated customer environments',
    subtitle:
      'We run each customer in a logically isolated environment, so your projects and data never mix with anyone else’s.',
  },
  {
    icon: SecurityIcon5,
    title: 'Customer-owned storage',
    subtitle:
      'All results, logs, and artifacts can be stored directly on your own servers or cloud accounts, with retention fully controlled by your internal policies.',
  },
  {
    icon: SecurityIcon6,
    title: 'No training on your data',
    subtitle:
      'Your data is never used to train or fine-tune any AI models — ours or third-party, open-source or commercial.',
  },
];
</script>

<template>
  <div class="relative">
    <div class="absolute top-0 left-0">
      <img :src="lightLeft" alt="" />
    </div>

    <div class="absolute top-0 right-0 max-md:top-[50px]">
      <img :src="lightRight" alt="" />
    </div>
  </div>
  <Section
    text-wrap-class="max-md:mb-12"
    title="Security Built for the Enterprise"
    align="center"
    subtitle="Your data, scenarios, and results stay in your environment and under your control."
    text-subtitle=""
    ><div class="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 w-full">
      <div
        v-for="(card, index) in SecurityCards"
        :key="index"
        class="flex flex-col items-start justify-center p-10 gap-4 rounded-[20px] border border-border-dark bg-bg-dark shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] cardsHover max-lg:p-[24px]"
      >
        <div class="flex flex-col items-center gap-8 w-full">
          <component :is="card.icon" />
          <div class="text-white text-center font-ibm text-2xl font-normal leading-[130%]">
            {{ card.title }}
          </div>
        </div>
        <div class="text-subtitle-color text-center font-ibm text-base font-normal leading-[150%]">
          {{ card.subtitle }}
        </div>
      </div>
    </div></Section
  >
</template>

<style scoped></style>
