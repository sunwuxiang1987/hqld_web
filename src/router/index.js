import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Index from '@/views/Index'
import Index2 from '@/views/Index2'
import About from '@/views/About'
import Vshop from '@/views/Vshop'
import Order from '@/views/Order'
import OrderLogin from '@/views/OrderLogin'
import Success from '@/views/Success'
import Travel from '@/views/Travel'
import Service from '@/views/Service'
import Share from '@/views/Share'
import Case from '@/views/Case'
import Daren from '@/views/Daren'
import Zz from '@/views/Zz'
import Me from '@/views/Me'
import MeLogin from '@/views/MeLogin'
import Detail from '@/views/Detail'
import LoginSuccess from '@/views/LoginSuccess'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/me',
      name: 'Me',
      component: Me
    },{
      path: '/index2',
      name: 'Index2',
      component: Index2
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/order_login',
      name: 'OrderLogin',
      component: OrderLogin
    },{
      path: '/success',
      name: 'Success',
      component: Success
    },{
      path: '/travel',
      name: 'Travel',
      component: Travel
    },{
      path: '/vshop',
      name: 'Vshop',
      component: Vshop
    },{
      path: '/service',
      name: 'Service',
      component: Service
    },{
      path: '/share',
      name: 'Share',
      component: Share
    },{
      path: '/zz',
      name: 'Zz',
      component: Zz
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/me_login',
      name: 'MeLogin',
      component: MeLogin
    },{
      path: '/case',
      name: 'Case',
      component: Case
    },{
      path: '/daren',
      name: 'Daren',
      component: Daren
    },{
      path: '/login_success',
      name: 'LoginSuccess',
      component: LoginSuccess
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },{
      path: '/footer',
      name: 'Footer',
      component: Footer
    },

  ]
})
