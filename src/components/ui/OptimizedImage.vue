<script setup lang="ts">
interface Props {
  imageId?: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'inside' | 'outside';
  loading?: 'lazy' | 'eager';
}

const props = withDefaults(defineProps<Props>(), {
  imageId: undefined,
  alt: '',
  width: 800,
  height: 600,
  quality: 85,
  format: 'webp',
  fit: 'cover',
  loading: 'lazy',
});

const imageUrl = computed(() => {
  if (props.imageId && props.imageId.startsWith('http')) {
    return props.imageId;
  }

  if (props.imageId && props.imageId.startsWith('/')) {
    return props.imageId;
  }

  // Mock/placeholder images (no Directus)
  if (props.imageId) {
    const seed = String(props.imageId).replace(/[^a-z0-9-]/gi, '1') || '1';
    return `https://picsum.photos/seed/${seed}/${props.width}/${props.height}`;
  }

  return '/img/blogImage1.png';
});

const hasImage = computed(() => !!props.imageId);
const imageError = ref(false);

const handleImageError = () => {
  // Fallback to default image on error
};
</script>

<template>
  <NuxtImg
    v-if="hasImage && !imageError"
    :src="imageUrl"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    class="object-cover hover:scale-105 transition-transform duration-300"
    @error="handleImageError"
  />
  <div v-else class="bg-dark-700 flex items-center justify-center">
    <span class="text-gray-500 text-sm">No image</span>
  </div>
</template>
