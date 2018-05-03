import Vue from 'vue'
import Router from 'vue-router'

import  Home from "../components/tabbar/home"
import  Cart from "../components/tabbar/cart"
import  Member from "../components/tabbar/member"
import  Search from "../components/tabbar/search"

import NewsDetail from "../components/news/detail"
import NewsList from "../components/news/list"


Vue.use(Router)

export default new Router({
  routes: [
    // 如果首页只是设置path和component的话，一个/会匹配所有导致首页一直会高亮
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/member",
      component:Member
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/newsdetail/:id",
      component:NewsDetail
    },
    {
      path:"/newslist",
      component:NewsList
    }
  ],
  linkActiveClass:"mui-active"
})
