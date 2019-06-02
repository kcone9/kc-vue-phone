import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import login from './components/login.vue'
import register from './components/register'
import details from './components/details'
import list from './components/list'
import forget from './components/forget'
import user from './components/user'
import cartlist from './components/cartlist'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},//   /被访问时，将'/'自动替换(跳转)为'/home'
    {path:'/home',component:home},
    {path:'/login',component:login},
    {path:'/register',component:register},
    {path:'/details',component:details},
    {path:'/list',component:list},
    {path:'/forget',component:forget},
    {path:'/user',component:user},
    {path:'/cartlist',component:cartlist}
  ]
})
