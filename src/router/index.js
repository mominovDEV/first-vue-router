import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import products from '../views/products.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: "/products",
    name: "products",
    component: products,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
