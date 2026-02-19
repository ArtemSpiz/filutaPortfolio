<script setup>
import ColorButton from '@/components/ui/ColorButton/ColorButton.vue';
</script>

<template>
  <div
    class="h-screen bg-[url('/img/bgResearchHero.png')] bg-no-repeat bg-cover bg-center flex flex-col max-md:gap-18 max-md:h-full max-sm:bg-[url('/img/researchHeroBgMob.png')] max-md:pb-16"
  >
    <div
      class="heroContainer flex items-center justify-center flex-col max-lg:h-[calc(100vh-96px)] max-md:h-full max-sm:px-6"
    >
      <div class="flex flex-col gap-8 items-center justify-center text-center">
        <div class="heroUnderTitle">Building the Next Generation of Intelligent Systems</div>
        <div class="flex flex-col gap-6 items-center justify-center text-center">
          <div class="HeroTitle">Research</div>
          <div class="HeroSubtitle !max-w-4xl mx-auto">
            At Filuta AI, we push the boundaries of Composite AI by combining symbolic synthetic
            reasoning with neural networks. Our research powers breakthroughs in automation,
            intelligent testing, and real-world decision-making, turning complex systems into truly
            smart solutions.
          </div>
        </div>
      </div>
      <ColorButton text="Explore Our Research" />
    </div>
  </div>
</template>

<style scoped></style>
