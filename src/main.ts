import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

// styles

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/styles/tailwind.css'

// mouting point for the whole app

import App from '@/App.vue'

import { routes } from './routes'

// routes

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
