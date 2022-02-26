import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/login', 
    name: "Login", 
    component: () => import('../views/authentication/LogIn.vue')
  }, 
  { 
    path: '/register', 
    name: "SignUp", 
    component: () => import("../views/authentication/SignUp.vue")
  }, 
  { 
    path: '/ask', 
    name: "Ask", 
    component: () => import('../views/questions/AskQuestion.vue')
  }, 
  { 
    path: '/questions/:id', 
    name: "Questions", 
    component: () => import('../views/questions/QView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
