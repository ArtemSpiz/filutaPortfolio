<template>
  <div class="flex justify-between items-start w-full gap-12 max-sm:flex-col max-sm:gap-[32px]">
    <div
      v-for="(link, index) in links"
      :key="index"
      class="flex flex-col items-start gap-6 max-md:gap-[16px]"
    >
      <div class="text-gray-500 font-mono text-[16px] font-light uppercase">
        {{ link.title }}
      </div>
      <div class="flex flex-col items-start gap-3">
        <NuxtLink
          v-for="(item, subIndex) in link.subtitles"
          :key="subIndex"
          :to="item.href"
          class="relative text-gray-900 font-ibm text-[16px] leading-[130%] cursor-pointer transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[1px] before:bg-brand-primary before:transition-all before:duration-300 hover:before:w-full"
          @click="handleLinkClick($event, item.href)"
        >
          {{ item.subtitle }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

interface FooterLink {
  title: string;
  subtitles: FooterSubtitle[];
}

interface FooterSubtitle {
  subtitle: string;
  href: string;
}

defineProps<{
  links: FooterLink[];
}>();

const route = useRoute();
const router = useRouter();

// Check if URL is external
const isExternalLink = (href: string) => href.startsWith('http://') || href.startsWith('https://');

// Handle link click with smooth scroll for anchor links
const handleLinkClick = (event: Event, href: string) => {
  // Handle external links - open in new tab
  if (isExternalLink(href)) {
    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
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
</script>
