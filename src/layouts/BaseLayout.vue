<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { siteData } from '@/data/siteData'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <header id="header" class="header dark-background d-flex flex-column">
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="profile-img">
      <img src="/assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle" />
    </div>

    <RouterLink to="/" class="logo d-flex align-items-center justify-content-center">
      <h1 class="sitename">{{ siteData.profile.name }}</h1>
    </RouterLink>

    <div class="social-links text-center">
      <a
        v-for="link in siteData.socialLinks"
        :key="link.label"
        :href="link.href"
        :class="link.class"
        :aria-label="link.label"
      >
        <i :class="link.icon"></i>
      </a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li v-for="item in siteData.navItems" :key="item.label">
          <RouterLink :to="{ path: item.path, hash: item.hash }">
            <i :class="item.icon + ' navicon'"></i> {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <slot />

  <footer id="footer" class="footer position-relative light-background">
    <div class="container">
      <div class="copyright text-center">
        <p>
          © <span>{{ year }}</span> <strong class="px-1 sitename">{{ siteData.profile.name }}</strong>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </div>
  </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>

  <!-- Preloader -->
  <div id="preloader"></div>
</template>
