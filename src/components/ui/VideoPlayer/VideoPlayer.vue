<template>
  <div class="relative group w-full h-full">
    <!-- DIRECTUS VIDEO FILE -->
    <video
      v-if="videoFileUrl"
      ref="videoRef"
      :src="videoFileUrl"
      class="w-full h-full object-cover rounded-md"
      controls
      playsinline
    />

    <!-- YOUTUBE / VIMEO EMBED -->
    <iframe
      v-else-if="embedUrl && isPlaying"
      :src="embedUrl"
      class="w-full h-full rounded-md"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    />

    <!-- THUMBNAIL -->
    <img
      v-else-if="thumbnailUrl"
      :src="thumbnailUrl"
      :alt="alt"
      class="w-full h-full object-cover rounded-md cursor-pointer"
      @click="handleVideoClick"
    />

    <!-- PLAY BUTTON -->
    <div
      v-if="!isPlaying && !videoFileUrl"
      class="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
      @click="handleVideoClick"
    >
      <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
        <svg class="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  video?: any; // Video file object or string (ID/URL)
  videoUrl?: string; // External video URL (YouTube, Vimeo, etc.)
  alt: string;
  width?: number;
  height?: number;
  showPlayButton?: boolean;
  fallbackSrc?: string;
  videoClasses?: string;
  imageClasses?: string;
}

const props = withDefaults(defineProps<Props>(), {
  video: undefined,
  videoUrl: undefined,
  width: 400,
  height: 300,
  showPlayButton: true,
  fallbackSrc: '/img/video1.png',
  videoClasses: 'w-full h-full object-cover rounded-md',
  imageClasses: 'w-full h-full object-cover rounded-md',
});

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);

const isExternalVideoUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
};

const actualVideoUrl = computed(() => {
  if (props.videoUrl) return props.videoUrl;

  if (typeof props.video === 'string') {
    if (isExternalVideoUrl(props.video)) {
      return props.video;
    }
    return null;
  }

  return null;
});

// Local video URL (mock - no Directus)
const videoFileUrl = computed(() => {
  if (!props.video) return null;

  if (typeof props.video === 'string' && isExternalVideoUrl(props.video)) {
    return null;
  }

  // Video object with id (mock - use fallback)
  if (typeof props.video === 'object' && props.video?.id) {
    return null; // No Directus - use thumbnail/embed instead
  }

  if (typeof props.video === 'string' && !props.video.startsWith('http')) {
    return null; // Mock ID - no Directus assets
  }

  return null;
});

// Get embed URL for YouTube/Vimeo
const embedUrl = computed(() => {
  const url = actualVideoUrl.value;
  if (!url) return null;

  // YouTube
  const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([^&\n?#]+)/);
  if (youtubeMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch?.[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }

  return null;
});

// Get thumbnail URL for external videos
const thumbnailUrl = computed(() => {
  const url = actualVideoUrl.value;
  if (!url) return props.fallbackSrc;

  // YouTube
  const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([^&\n?#]+)/);
  if (youtubeMatch?.[1]) {
    return `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch?.[1]) {
    return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
  }

  return props.fallbackSrc;
});

const handleVideoClick = () => {
  if (videoFileUrl.value && videoRef.value) {
    videoRef.value.play();
    videoRef.value.requestFullscreen?.();
    return;
  }

  if (embedUrl.value) {
    isPlaying.value = true;
  }
};
</script>

<style scoped>
/* Custom video player styles can be added here */
</style>
