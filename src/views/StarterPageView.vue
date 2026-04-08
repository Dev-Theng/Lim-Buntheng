<script setup>
import { RouterLink } from 'vue-router'
import { siteData } from '@/data/siteData'
</script>

<template>
  <main class="main">
    <div class="page-title dark-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">{{ siteData.starterPage.title }}</h1>
        <nav class="breadcrumbs">
          <ol>
            <li
              v-for="crumb in siteData.starterPage.breadcrumbs"
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

    <section id="starter-section" class="starter-section section">
      <div class="container section-title" data-aos="fade-up">
        <h2>{{ siteData.starterPage.sectionTitle }}</h2>
        <p>{{ siteData.starterPage.sectionLead }}</p>
      </div>

      <div class="container" data-aos="fade-up">
        <p>{{ siteData.starterPage.sectionBody }}</p>
      </div>
    </section>
  </main>
</template>
