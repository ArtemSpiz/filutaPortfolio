<script setup>
import buildBg from '@/assets/img/buildBg.png';
import buildBgMob from '@/assets/img/buildBgMob.png';
import Section from '@/components/ui/Section/Section.vue';
import ColorButton from '@/components/ui/ColorButton/ColorButton.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useQuestionnaire } from '~/composables/useQuestionnaire';

const { openQuestionnaire } = useQuestionnaire();

defineProps({
  title: {
    type: String,
    default: 'Build Great Products,<br>With Less QA Overhead',
  },
  subtitle: {
    type: String,
    default: 'Let Filuta handle the grunt work so your team can focus on building features customers love.',
  },
  titleClass: {
    type: String,
    default: '',
  },
  subtitleClass: {
    type: String,
    default: '',
  },
});

const backgroundImage = ref(buildBg);

function updateBg() {
  if (process.client) {
    backgroundImage.value = window.innerWidth < 450 ? buildBgMob : buildBg;
  }
}

onMounted(() => {
  if (process.client) {
    updateBg();
    window.addEventListener('resize', updateBg);
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', updateBg);
  }
});
</script>

<template>
  <Section align="left" text-wrap-class="" text-subtitle=""
    ><div
      class="flex flex-col items-start gap-[56px] px-[60px] py-[64px] w-full rounded-[24px] bg-no-repeat bg-cover max-lg:p-[45px] max-md:p-[30px] max-sm:p-[24px] max-md:gap-[32px] max-sm:h-[396px]"
      :style="{
        backgroundImage: `url(${backgroundImage}), linear-gradient(83deg, #a192f5 0%, #5c9af9 50%, #57c0c9 100%)`,
        backgroundSize: '100% 100%',
      }"
    >
      <div class="flex flex-col items-start gap-6 w-full">
        <div
          class="text-white font-ibm text-[56px] font-normal leading-[125%] w-full max-w-[750px] max-xl:text-[50px] max-xl:max-w-[650px] max-lg:text-[45px] max-lg:max-w-[550px] max-md:text-[40px] max-md:max-w-[450px] max-sm:text-[30px] max-sm:max-w-[300px]"
          :class="titleClass"
          v-html="title"
        ></div>
        <div
          class="text-white font-ibm text-base font-normal leading-[150%] w-[350px] max-sm:max-w-[350px] max-sm:w-full"
          :class="subtitleClass"
        >
          {{ subtitle }}
        </div>
      </div>

      <ColorButton class="!bg-white !text-[#0e0e0e] [&_svg_path]:fill-[#0e0e0e]" @click="openQuestionnaire" /></div
  ></Section>
</template>

<style scoped></style>
