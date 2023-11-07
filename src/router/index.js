import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import MainHome from '../components/MainHome.vue'

const routes = [
  {
    path: '/',
    name: 'NavBar',
    component: NavBar
  },
  {
    path: '/',
    name: 'MainHome',
    component: MainHome
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
