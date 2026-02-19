<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import '@/assets/css/main.css';
// Global SEO and meta tags
useHead({
  title: 'Filuta AI',
  meta: [
    {
      name: 'description',
      content:
        'Autonomous AI testing powered by Synthetic Reasoning. Our agents interact with your software as real users would, ensuring flawless experiences before release.',
    },
    {
      name: 'keywords',
      content:
        'AI testing, software testing, synthetic reasoning, autonomous testing, QA automation, test automation',
    },
    { name: 'author', content: 'Filuta' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Filuta AI' },
    {
      property: 'og:description',
      content:
        'Autonomous AI testing powered by Synthetic Reasoning. Our agents interact with your software as real users would.',
    },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:url', content: 'https://filuta.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Filuta AI' },
    {
      name: 'twitter:description',
      content:
        'Autonomous AI testing powered by Synthetic Reasoning. Our agents interact with your software as real users would.',
    },
    { name: 'twitter:image', content: '/og-image.jpg' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://filuta.com' },
  ],
});
</script>

<style>
/* Global page transition styles */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #2b2a30;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #57c1ca;
}

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
