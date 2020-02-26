import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/activities/Home.vue'
import Blog from '../components/activities/Blog.vue'
import Post from '../components/activities/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  routes
})

export default router
