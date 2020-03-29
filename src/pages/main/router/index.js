import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/main/pages/home'
import BaseLayout from '@/components/BaseLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: 'home',
        component: Home
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
