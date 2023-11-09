import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../components/MainHome.vue'
import MainOmnie from '../components/MainOmnie.vue'
import MainProjekty from '../components/MainProjekty.vue'
import MainKontakt from '../components/MainKontakt.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainHome
  },
  {
    path: '/Home',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/Omnie',
    name: 'MainOmnie',
    component: MainOmnie
  },
  {
    path: '/Projekty',
    name: 'MainProjekty',
    component: MainProjekty
  },
  {
    path: '/Kontakt',
    name: 'MainKontakt',
    component: MainKontakt
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
