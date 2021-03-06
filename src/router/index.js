import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Photo from '../views/Photo.vue';
import Inicio from '../views/Inicio.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/home',
    component: Home,
    children: [
      {path: '/',component: Home},
      {path: ':tag',component: Home}
    ]
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
