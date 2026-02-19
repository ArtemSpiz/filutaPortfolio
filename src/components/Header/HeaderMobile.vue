<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import headerIcon1 from '@/assets/img/headerIcon1.png';
import headerIcon2 from '@/assets/img/headerIcon2.png';
import headerIcon3 from '@/assets/img/headerIcon3.png';
import headerIcon6 from '@/assets/img/headerIcon6.png';
import headerIcon7 from '@/assets/img/headerIcon7.png';
import headerIcon8 from '@/assets/img/headerIcon8.png';
import ArrowIcon from '@/assets/svg/ArrowIcon.vue';
import BurgerIcon from '@/assets/svg/BurgerIcon.vue';
import Cross from '@/assets/svg/Cross.vue';
import { headerNavs } from '@/content/header';
import HeaderLogo from './HeaderLogo.vue';

// Create a map of icon names to actual imports
const iconMap = {
  headerIcon1,
  headerIcon2,
  headerIcon3,
  headerIcon6,
  headerIcon7,
  headerIcon8,
};

// SVG icons for specific menu items
const isSvgIcon = (iconName: string) => iconName === 'headerIconMonitor';

const route = useRoute();
const router = useRouter();
const burgerOpen = ref(false);
const openIndex = ref<number | null>(null);

const handlerBurgerOpen = () => {
  burgerOpen.value = !burgerOpen.value;
};

const closeMenu = () => {
  burgerOpen.value = false;
  openIndex.value = null;
};

const toggleDropdown = (index: number) => {
  if (!headerNavs[index]?.arrow) return;
  openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = (index: number) => openIndex.value === index;

// Check if URL is external
const isExternalLink = (href: string) => href.startsWith('http://') || href.startsWith('https://');

// Handle link click with smooth scroll for anchor links
const handleLinkClick = (event: Event, href: string) => {
  // Handle external links - open in new tab
  if (isExternalLink(href)) {
    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
    closeMenu();
    return;
  }

  if (href.startsWith('/#')) {
    event.preventDefault();
    const targetId = href.substring(2);

    if (route.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          scrollToElement(targetId);
        }, 100);
      });
    } else {
      scrollToElement(targetId);
    }
    closeMenu();
  }
};

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Watch for route changes and close menu
watch(
  () => route.path,
  () => {
    closeMenu();
  }
);
</script>

<template>
  <div>
    <BurgerIcon class="hidden w-full max-md:flex cursor-pointer" @click="handlerBurgerOpen()" />
    <div
      v-if="burgerOpen"
      class="fixed top-0 left-0 w-screen transition-[height] duration-300 flex-col h-max p-[24px] z-[9999] bg-dark-950 flex items-center justify-center gap-[40px]"
    >
      <div class="flex justify-between w-full items-center">
        <HeaderLogo />
        <Cross class="cursor-pointer" @click="handlerBurgerOpen()" />
      </div>

      <div class="flex flex-col gap-[56px] justify-center items-center w-full">
        <div class="flex flex-col gap-[32px] justify-center items-center w-full">
          <div
            v-for="(navItem, index) in headerNavs"
            :key="index"
            class="flex items-center relative w-full gap-[16px] flex-col"
          >
            <NuxtLink
              :to="navItem.href"
              :class="[
                'flex items-center justify-between font-light text-base font-ibm cursor-pointer w-full transition-all duration-500',
                {
                  'text-brand-secondary': isOpen(index),
                  'text-white': !isOpen(index),
                },
              ]"
              @click="toggleDropdown(index)"
            >
              {{ navItem.title }}
              <ArrowIcon
                v-if="navItem.arrow"
                :class="[
                  'transition-all duration-300',
                  isOpen(index) && 'rotate-180 [&>path]:fill-brand-secondary',
                ]"
              />
            </NuxtLink>
            <div
              v-if="isOpen(index)"
              :class="[
                ' w-full flex flex-col items-start gap-2 p-3 rounded-[10px] border border-white/20 bg-dark-950/20 backdrop-blur-[10px] opacity-0  transition-all duration-300',
                {
                  'opacity-100 visible': isOpen(index),
                },
              ]"
            >
              <NuxtLink
                v-for="(linkItem, linkIndex) in navItem.links"
                :key="linkIndex"
                :to="linkItem.href"
                class="link-hover-bg relative flex items-center gap-[12px] w-full px-3.5 py-[14px] rounded-[8px] bg-gradient-to-l from-dark-800/40 to-dark-800/50 transition-[background] duration-500"
                @click="handleLinkClick($event, linkItem.href)"
              >
                <div class="w-5 h-5 z-10 flex items-center justify-center">
                  <svg v-if="isSvgIcon(linkItem.icon)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
                    <rect x="14" y="8" width="35" height="25" rx="2" ry="2" fill="white" />
                    <rect x="28" y="36" width="8" height="4" fill="white" />
                    <rect x="22" y="40" width="20" height="2" fill="white" />
                  </svg>
                  <img
                    v-else-if="linkItem.icon && iconMap[linkItem.icon as keyof typeof iconMap]"
                    :src="iconMap[linkItem.icon as keyof typeof iconMap]"
                    alt="icon"
                  />
                </div>
                <div class="flex flex-col gap-[2px]">
                  <div class="z-10 font-light text-white text-[16px] leading-[20px]">
                    {{ linkItem.link }}
                  </div>
                  <div
                    v-if="linkItem.subtitle"
                    class="text-[14px] font-ibm font-light leading-5 text-gray-400"
                  >
                    {{ linkItem.subtitle }}
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <HeaderCTA />
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-hover-bg:hover {
  background: linear-gradient(270deg, rgba(16, 31, 31, 0.2) 0%, #4b52cf 100%);
}
</style>
