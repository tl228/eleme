import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'com/Hello'
import Goods from 'com/Goods/Goods'
import Ratings from 'com/Ratings/Ratings'
import Seller from 'com/Seller/Seller'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
      	{
      		path:'', component: Goods
      	},
      	{
      		path:'goods', component: Goods
      	},
      	{
      		path:'ratings', component: Ratings
      	},
      	{
      		path:'seller', component: Seller
      	}      	      	
      ]

    },
    // {path:'*', redirect:'/'}  //404
    {path:'/', redirect:'/goods'}  //主页重定向
  ]
})
