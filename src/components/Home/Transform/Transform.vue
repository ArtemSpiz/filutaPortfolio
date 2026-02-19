<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import transformCards1 from '@/assets/img/transformCards1.png';
import transformCards2 from '@/assets/img/transformCards2.png';
import transformCards3 from '@/assets/img/transformCards3.png';
import transformCards4 from '@/assets/img/transformCards4.png';
import bgTransformCard from '@/assets/img/bgTransformCard.png';
import transformLight from '@/assets/img/transformLight.png';
import Section from '@/components/ui/Section/Section.vue';

gsap.registerPlugin(ScrollTrigger);

const transformCards = [
  {
    title: 'Faster Development Cycles',
    text: 'Our Synthetic AI agents run continuously with every build, catching bugs early and reducing the time between iterations. This means shorter release cycles and faster time-to-market — without waiting on manual QA.',
    image: transformCards1,
    step: '01',
  },
  {
    title: 'Cut QA Costs by Up to 70%',
    text: 'Filuta automates repetitive QA work, so your testers can focus on what really matters, the user experience and fun factor. All while reducing costs and boosting coverage.',
    image: transformCards2,
    step: '02',
  },
  {
    title: 'Actionable, Consistent Reports',
    text: 'Every test comes with structured, reproducible reports mapped to real gameplay, making bugs easy to trace, fix, and verify. Filuta integrates seamlessly into your existing CI/CD pipeline.',
    image: transformCards3,
    step: '03',
  },
  {
    title: 'Easy Setup and Smooth Integration',
    text: 'Start testing in days, not months. Filuta works out of the box with Unity, Unreal, and custom engines, no code rewrites or headaches.',
    image: transformCards4,
    step: '04',
  },
];

const activeIndex = ref(0);
const cardWidths = ref(transformCards.map((_, i) => (i === 0 ? 808 : 80)));
const indicatorRefs = ref([]);
const scrollTriggers = ref([]);
const isMobile = ref(false);

const setActive = index => {
  if (!isMobile.value && index !== activeIndex.value) {
    // Animate card widths when clicking
    const cards = document.querySelectorAll('.transformCard');
    cards.forEach((card, i) => {
      if (i === index) {
        gsap.to(card, {
          width: 808,
          duration: 0.5,
          ease: 'power2.inOut',
          onUpdate: () => {
            cardWidths.value[i] = parseFloat(gsap.getProperty(card, 'width'));
          },
        });
      } else {
        gsap.to(card, {
          width: 80,
          duration: 0.5,
          ease: 'power2.inOut',
          onUpdate: () => {
            cardWidths.value[i] = parseFloat(gsap.getProperty(card, 'width'));
          },
        });
      }
    });
    activeIndex.value = index;

    // Update indicators
    indicatorRefs.value.forEach((el, i) => {
      if (el) {
        if (i === index) {
          gsap.to(el, {
            width: 60,
            backgroundColor: '#fff',
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(el, {
            width: 10,
            backgroundColor: '#d0d0d0',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      }
    });
  }
};

onMounted(() => {
  if (process.client) {
    isMobile.value = window.innerWidth < 769;
  }
});

const getContentOpacity = index => {
  if (!isMobile.value) {
    const w = cardWidths.value[index];
    if (w >= 300) return 1;
    if (w <= 80) return 0;
    return (w - 80) / 220;
  }
};

onMounted(async () => {
  if (process.client) {
    isMobile.value = window.innerWidth < 769;
  }
  if (isMobile.value) return;

  try {
    await nextTick();
    const cards = gsap.utils.toArray('.transformCard');
    const totalCards = cards.length;

    if (totalCards === 0) {
      return;
    }

    cards.forEach((card, i) => {
      gsap.set(card, { width: i === 0 ? 808 : 80 });
      cardWidths.value[i] = i === 0 ? 808 : 80;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.transformCardsWrapper',
        start: 'center center',
        end: () => `+=${(totalCards - 1) * 600}`,
        pin: '.transform',
        scrub: 0.8,
        id: 'transform-scroll-trigger',
        onUpdate: self => {
          const progress = self.progress;
          const index = Math.round(progress * (totalCards - 1));
          activeIndex.value = index;

          indicatorRefs.value.forEach((el, i) => {
            if (el) {
              if (i === index) {
                gsap.to(el, {
                  width: 60,
                  backgroundColor: '#fff',
                  duration: 0.2,
                  ease: 'power1.out',
                });
              } else {
                gsap.to(el, {
                  width: 10,
                  backgroundColor: '#d0d0d0',
                  duration: 0.2,
                  ease: 'power1.out',
                });
              }
            }
          });
        },
      },
    });

    scrollTriggers.value.push(tl.scrollTrigger);

    for (let i = 0; i < totalCards - 1; i++) {
      const current = cards[i];
      const next = cards[i + 1];

      tl.to(
        current,
        {
          width: 80,
          duration: 1,
          ease: 'power2.inOut',
          onUpdate: () => {
            cardWidths.value[i] = parseFloat(gsap.getProperty(current, 'width'));
          },
        },
        i
      );
      tl.to(
        next,
        {
          width: 808,
          duration: 1,
          ease: 'power2.inOut',
          onUpdate: () => {
            cardWidths.value[i + 1] = parseFloat(gsap.getProperty(next, 'width'));
          },
        },
        i
      );
    }

    ScrollTrigger.refresh();
  } catch (error) {
    // Handle animation initialization errors
  }
});

onUnmounted(() => {
  const transformTrigger = ScrollTrigger.getById('transform-scroll-trigger');
  if (transformTrigger) transformTrigger.kill();
});
</script>

<template>
  <div class="transform overflow-hidden">
    <Section
      align="left"
      text-wrap-class="text-start "
      text-subtitle="!mx-0 !max-w-full"
      section-classes=" relative"
      title="Upgrade Your QA with Autonomous AI Agents"
      subtitle="Filuta helps you to accelerate development, save costs, and ship with confidence. All in one platform."
    >
      <div
        class="absolute right-[-130px] -top-[15%] pointer-events-none w-[790px] max-md:-top-[8%]"
      >
        <img :src="transformLight" alt="light" />
      </div>

      <div class="transformCardsWrapper relative w-full">
        <div class="transformCards flex gap-4 justify-center items-start max-md:flex-col">
          <div
            v-for="(card, index) in transformCards"
            :key="index"
            class="transformCard overflow-hidden flex rounded-[20px] bg-gradient-to-l from-[#112231] to-[#19192b] relative max-md:w-full cursor-pointer"
            :style="!isMobile ? { width: cardWidths[index] + 'px' } : {}"
            @click="setActive(index)"
          >
            <div
              class="w-[808px] h-[559px] min-w-[808px] max-w-[808px] p-11 box-border flex justify-between max-xl:min-w-[auto] max-md:w-full max-lg:flex-col max-md:justify-center max-md:items-center max-md:p-[24px] max-md:gap-[24px] max-md:h-max"
            >
              <div
                v-if="isMobile || index === activeIndex"
                class="absolute w-full h-full top-0 right-0 z-0 pointer-events-none"
              >
                <img
                  :src="bgTransformCard"
                  alt="bgTransformCard"
                  class="w-full h-full object-cover"
                />
              </div>

              <div
                class="flex flex-col justify-between h-full z-10 max-lg:gap-[16px] max-lg:justify-start"
                :style="{
                  opacity: getContentOpacity(index),
                  transition: 'opacity 0.4s ease-out',
                }"
              >
                <div
                  v-if="isMobile || index === activeIndex"
                  class="flex flex-col items-start gap-4 max-w-[335px] w-full max-lg:min-w-[320px] max-md:min-w-[auto]"
                >
                  <div
                    class="text-white text-[24px] leading-[130%] font-ibm max-md:text-[22px] max-sm:text-[20px]"
                  >
                    {{ card.title }}
                  </div>
                  <div class="text-white/90 text-[16px] leading-[150%] font-ibm max-sm:text-[14px]">
                    {{ card.text }}
                  </div>
                </div>
                <div
                  v-if="isMobile || index === activeIndex"
                  class="flex flex-col items-start gap-2 max-md:hidden"
                >
                  <div class="text-white/90 text-[16px] font-ibm flex items-center gap-1">
                    {{ card.step }}
                    <span class="text-white/40 text-[12px]">/04</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <div
                      v-for="(_, i) in transformCards"
                      :key="i"
                      :ref="el => (indicatorRefs[i] = el)"
                      class="h-[5px] rounded-full bg-white/40 transition-all duration-700"
                      :class="{
                        'w-[60px] bg-white': i === activeIndex,
                        'w-[10px]': i !== activeIndex,
                      }"
                    ></div>
                  </div>
                </div>
              </div>

              <div
                v-if="isMobile || index === activeIndex"
                class="w-[380px] z-10 my-auto max-lg:w-[250px] max-md:max-w-[286px] max-md:w-full"
              >
                <img
                  :src="card.image"
                  alt="cardImage"
                  class="w-full h-auto"
                  :style="{ opacity: getContentOpacity(index), transition: 'opacity 0.4s ease-out' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.transformCard {
  overflow: hidden;
  transition: width 0.3s ease-out;
  position: relative;
}
.ggg {
  width: 808px;
  min-width: 808px;
  max-width: 808px;
  height: 559px;
  padding: 44px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.transformCardContent {
  transition: opacity 0.7s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.transformCardsWrapper {
  position: relative;
}
</style>
