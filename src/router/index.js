import { createRouter, createWebHistory } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import MainHome from '../components/MainHome.vue'
import MainOmnie from '../components/MainOmnie.vue'
import MainProjekty from '../components/MainProjekty.vue'
import MainKontakt from '../components/MainKontakt.vue'

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
  },
  {
    path: '/MainOmnie',
    name: 'MainOmnie',
    component: MainOmnie
  },
  {
    path: '/',
    name: 'MainProjekty',
    component: MainProjekty
  },
  {
    path: '/',
    name: 'MainKontakt',
    component: MainKontakt
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
