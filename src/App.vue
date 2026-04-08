<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'

const route = useRoute()

const bodyClassMap = {
  home: 'index-page',
  'portfolio-details': 'portfolio-details-page',
  'service-details': 'service-details-page',
  'starter-page': 'starter-page-page',
}

const setBodyClass = (name) => {
  const bodyClass = bodyClassMap[name] || 'index-page'
  document.body.className = bodyClass
}

const triggerTemplateInit = async () => {
  await nextTick()
  window.dispatchEvent(new Event('load'))
  document.dispatchEvent(new Event('scroll'))
}

onMounted(() => {
  setBodyClass(route.name)
  triggerTemplateInit()
})

watch(
  () => route.name,
  () => {
    setBodyClass(route.name)
    triggerTemplateInit()
  }
)
</script>

<template>
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>
