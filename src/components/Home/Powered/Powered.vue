<script setup>
const PoweredCards = [
  {
    title: '135+ ',
    subtitle: 'Years of experience in AI research',
  },
  {
    title: '128+',
    subtitle: 'Combined years developing advanced software systems',
  },
  {
    title: '16',
    subtitle: 'Doctorates in Artificial Intelligence and mathematics',
  },
  {
    title: '20+',
    subtitle: 'Patents and published papers on AI, testing, and automation',
  },
];
</script>

<template>
  <div
    class="powered flex justify-center items-start overflow-hidden relative gap-[56px] container max-md:gap-[32px] max-lg:flex-col max-lg:justify-center max-lg:items-center py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12 max-md:justify-start max-md:items-start"
  >
    <div class="flex flex-col items-start gap-4 max-w-[585px] w-full poweredText">
      <div class="Title">Powered by Innovation and Expertise</div>
      <div class="Subtitle">
        Filuta AI is built by a world-class team of 39 engineers and AI scientists, with decades of
        experience in synthetic reasoning, deep-space exploration, and mission-critical software.
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 max-w-[584px] w-full relative poweredCards max-md:grid-cols-1">
      <div
        v-for="(card, index) in PoweredCards"
        :key="index"
        class="w-full flex flex-col items-start justify-start gap-3 p-8 rounded-[20px] border border-border-dark bg-bg-dark shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] max-sm:p-[24px]"
      >
        <div
          :class="[
            'text-[48px] leading-[130%] font-ibm font-normal max-lg:text-[42px] max-md:text-[40px] max-sm:text-[36px]',
            index === 2 ? 'text-text-purple' : 'text-brand-primary',
          ]"
        >
          {{ card.title }}
        </div>
        <div class="text-subtitle-color text-[14px] leading-[150%] font-ibm">
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Title {
  @apply font-["IBM_Plex_Sans"] text-[48px] font-normal leading-[130%];
  background: linear-gradient(90deg, #dad8fd 23.24%, #fff 50.62%, #dad8fd 79.62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.Subtitle {
  @apply text-white text-[16px] w-full max-w-[420px] leading-[150%] font-ibm font-normal;
}

.Title {
  @apply text-3xl md:text-4xl lg:text-5xl font-normal font-ibm text-white !leading-[130%];
}

.Subtitle {
  @apply text-lg md:text-xl text-subtitle-color leading-relaxed;
}
</style>
