import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioDetailsView from '../views/PortfolioDetailsView.vue'
import StarterPageView from '../views/StarterPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio/:slug',
      name: 'portfolio-details',
      component: PortfolioDetailsView,
    },
    {
      path: '/portfolio-details',
      redirect: '/portfolio/volunteer',
    },
    {
      path: '/starter-page',
      name: 'starter-page',
      component: StarterPageView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
