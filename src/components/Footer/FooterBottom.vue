<template>
  <div
    class="flex justify-between items-center max-sm:grid max-sm:grid-cols-2auto max-md:gap-[24px]"
  >
    <div class="text-gray-500 font-ibm text-[14px] leading-[130%]">
      {{ copyright }}
    </div>
    <NuxtLink
      :to="privacyPolicy.href"
      class="text-gray-500 font-ibm text-[14px] leading-[130%] hover:text-gray-700 transition-colors duration-300"
    >
      {{ privacyPolicy.text }}
    </NuxtLink>
    <div class="text-gray-500 font-ibm text-[14px] leading-[130%]">
      {{ allRights }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface PrivacyPolicy {
  text: string;
  href: string;
}

defineProps<{
  copyright: string;
  privacyPolicy: PrivacyPolicy;
  allRights: string;
}>();
</script>
