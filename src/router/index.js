import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const VueRouterPush = VueRouter.prototype.push;
const VueRouterReplece = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve || reject) return VueRouterPush.call(this,location,resolve,reject)
  return VueRouterPush.call(this,location).catch((err)=> {})
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve || reject) return VueRouterReplece.call(this,location,resolve,reject)
  return VueRouterReplece.call(this,location).catch((err)=> {})
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
