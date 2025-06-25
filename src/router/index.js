import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArticleOne from '../views/ArticleOne.vue'
import ArticleTwo from '../views/ArticleTwo.vue'
import ArticleThree from '../views/ArticleThree.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/article1',
    name: 'Article1',
    component: ArticleOne
  },
  {
    path: '/article2',
    name: 'Article2',
    component: ArticleTwo
  },
  {
    path: '/article3',
    name: 'Article3',
    component: ArticleThree
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
