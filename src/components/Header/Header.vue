<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderLogo from './HeaderLogo.vue';
import HeaderNavigation from './HeaderNavigation.vue';
import HeaderCTA from './HeaderCTA.vue';
import HeaderMobile from './HeaderMobile.vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
    :class="[
      'fixed left-0 right-0 z-50 w-full px-8 transition-all duration-300',
      'max-md:px-6',
      isScrolled
        ? 'top-0 py-3 bg-dark-900/90 backdrop-blur-md border-b border-white/10'
        : 'top-6 py-0 bg-transparent'
    ]"
  >
    <div class="flex items-center justify-between w-full max-w-[1440px] mx-auto box-border z-10">
      <div class="flex items-center justify-between w-full">
        <HeaderLogo />
        <div class="flex items-center gap-[81px] max-lg:gap-[24px] max-md:hidden">
          <HeaderNavigation />
          <HeaderCTA />
        </div>
        <HeaderMobile class="hidden max-md:flex" />
      </div>
    </div>
  </div>
</template>
