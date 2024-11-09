import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/clubs',
      name: 'clubs',
      component: () => import('../pages/clubsPage.vue'),
    },

    {
      path: '/events',
      name: 'events',
      component: () => import('../pages/eventPage.vue')
    },

    {
      path: '/clubPro',
      name: 'clubPro',
      component: () => import('../pages/clubProfile.vue')
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
