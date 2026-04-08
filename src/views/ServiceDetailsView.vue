<script setup>
import { RouterLink } from 'vue-router'
import { siteData } from '@/data/siteData'
</script>

<template>
  <main class="main">
    <div class="page-title dark-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">{{ siteData.serviceDetails.title }}</h1>
        <nav class="breadcrumbs">
          <ol>
            <li
              v-for="crumb in siteData.serviceDetails.breadcrumbs"
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

    <section id="service-details" class="service-details section">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="services-list">
              <a
                v-for="item in siteData.serviceDetails.servicesList"
                :key="item.label"
                href="#"
                :class="{ active: item.active }"
                >{{ item.label }}</a
              >
            </div>

            <h4>{{ siteData.serviceDetails.introTitle }}</h4>
            <p>{{ siteData.serviceDetails.introText }}</p>
          </div>

          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <img :src="siteData.serviceDetails.heroImage" alt="" class="img-fluid services-img" />
            <h3>{{ siteData.serviceDetails.heroTitle }}</h3>
            <p>{{ siteData.serviceDetails.heroParagraphs[0] }}</p>
            <ul>
              <li v-for="item in siteData.serviceDetails.heroList" :key="item">
                <i class="bi bi-check-circle"></i> <span>{{ item }}</span>
              </li>
            </ul>
            <p v-for="paragraph in siteData.serviceDetails.heroParagraphs.slice(1)" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
