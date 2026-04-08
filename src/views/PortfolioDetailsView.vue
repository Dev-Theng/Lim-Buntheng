<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { siteData } from '@/data/siteData'

const route = useRoute()

const portfolioItem = computed(() =>
  siteData.portfolioItems.find((item) => item.slug === route.params.slug)
)

const fallbackDetails = siteData.portfolioDetails

const detailsData = computed(() => portfolioItem.value?.detailsData || fallbackDetails)
const pageTitle = computed(() => portfolioItem.value?.title || fallbackDetails.title)
const breadcrumbs = computed(() => [
  { label: 'Home', href: '/', current: false },
  { label: 'Portfolio', href: '/#portfolio', current: false },
  { label: pageTitle.value, current: true },
])
</script>

<template>
  <main class="main">
    <div class="page-title dark-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">{{ pageTitle }}</h1>
        <nav class="breadcrumbs">
          <ol>
            <li
              v-for="crumb in breadcrumbs"
              :key="crumb.label"
              :class="{ current: crumb.current }"
            >
              <RouterLink v-if="!crumb.current" :to="crumb.href">{{ crumb.label }}</RouterLink>
              <span v-else>{{ crumb.label }}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <section id="portfolio-details" class="portfolio-details section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper init-swiper">
              <div class="swiper-config d-none" v-text="JSON.stringify(siteData.portfolioDetails.swiperConfig)"></div>

              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide" v-for="slide in detailsData.slides" :key="slide.image">
                  <img :src="slide.image" :alt="slide.alt" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info" data-aos="fade-up" data-aos-delay="200">
              <h3>Project information</h3>
              <ul>
                <li v-for="item in detailsData.infoItems" :key="item.label">
                  <strong>{{ item.label }}</strong>:
                  <span v-if="item.href"><a :href="item.href">{{ item.value }}</a></span>
                  <span v-else>{{ item.value }}</span>
                </li>
              </ul>
            </div>
            <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
              <h2>{{ detailsData.descriptionTitle }}</h2>
              <p>{{ detailsData.descriptionText }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
