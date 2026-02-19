<script setup>
import { ref } from 'vue';
import { useQuestionnaire } from '~/composables/useQuestionnaire';

const { openQuestionnaire } = useQuestionnaire();
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleScheduleDemo = () => {
  closeDropdown();
  openQuestionnaire();
};
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center justify-center h-12 px-6 gap-2 rounded-full border border-white bg-white/5 backdrop-blur-[6px] text-white font-ibm font-normal text-base"
      @click="toggleDropdown"
    >
      Contact us
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute top-[calc(100%+12px)] right-0 w-max flex flex-col items-start gap-2 p-3 rounded-[10px] border border-white/20 bg-[#0F202115] backdrop-blur-[10px] z-30"
    >
      <button
        class="group relative flex items-center gap-[12px] w-full px-3.5 py-[14px] rounded-[8px] bg-gradient-to-l from-dark-800/40 to-dark-800/50 transition-all duration-500 overflow-hidden hover:bg-gradient-to-l hover:from-[rgba(16,31,31,0.2)] hover:to-[#4b52cf] text-left"
        @click="handleScheduleDemo"
      >
        <div class="w-5 h-5 z-10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 10H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex flex-col gap-[2px]">
          <div class="z-10 font-light text-white text-[16px] leading-[20px]">
            Schedule a demo
          </div>
          <div class="text-[14px] font-ibm font-light leading-5 text-gray-400">
            Book a call with our team
          </div>
        </div>
      </button>

      <a
        href="mailto:info@filuta.ai"
        class="group relative flex items-center gap-[12px] w-full px-3.5 py-[14px] rounded-[8px] bg-gradient-to-l from-dark-800/40 to-dark-800/50 transition-all duration-500 overflow-hidden hover:bg-gradient-to-l hover:from-[rgba(16,31,31,0.2)] hover:to-[#4b52cf]"
        @click="closeDropdown"
      >
        <div class="w-5 h-5 z-10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="flex flex-col gap-[2px]">
          <div class="z-10 font-light text-white text-[16px] leading-[20px]">
            Email
          </div>
          <div class="text-[14px] font-ibm font-light leading-5 text-gray-400">
            info@filuta.ai
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
