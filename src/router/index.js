import Vue from 'vue'
import VueRouter from 'vue-router'
import UberComii from '../views/ubercomii/UberComii.vue'
import Komiidie from '../views/komiidie/Komiidie.vue'
import Mediathek from '../views/mediathek/Mediathek.vue'
import Partner from '../views/partner/Partner.vue'
import Presse from '../views/presse/Presse.vue'
import Kontaktieren from '../views/kontaktieren/Kontaktieren.vue'
import Startseite from '../views/startseite/Startseite.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ubercomii',
    component: UberComii
  },
  {
    path: '/startseite',
    name: 'startseite',
    component: Startseite
  },
  {
    path: '/komiidie',
    name: 'komiidie',
    component: Komiidie
  },
  {
    path: '/mediathek',
    name: 'mediathek',
    component: Mediathek
  },
  {
    path: '/partner',
    name: 'partner',
    component: Partner
  },
  {
    path: '/presse',
    name: 'presse',
    component: Presse
  },
  {
    path: '/kontaktieren',
    name: 'kontaktieren',
    component: Kontaktieren
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => {
    return { x: 0, y: 0 }
  }
})

export default router
