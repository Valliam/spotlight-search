import Vue from 'vue'
import Router from 'vue-router'
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
/* layout */
import Layout from '../views/layout/Layout'

const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/404', component: _import('404'), hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    meta: {title: "dashboard", icon: "eye"},
    hidden: true,
    children: [{
      path: '/dashboard',
      component: _import('dashboard/index'),
    }]
  }
]
export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/SpotLight',
    component: Layout,
    name: 'SpotLight',
    meta: {title: 'SpotLight', icon: 'eye'},
    hidden:true,
    children: [
      {
        path: 'search',
        name: 'search',
        component: _import('search/search'),
        meta: {title: '搜索', icon: 'tree'},
        menu: 'article'
      },
    ]
  },
  {
    path: '/SpotLight',
    component: Layout,
    name: 'helloPage',
    meta: {title: 'SpotLight', icon: 'tree'},
    hidden:false,
    children: [
      {
        path: 'index',
        name: 'index',
        component: _import('search/index'),
        meta: {title: '搜索', icon: 'search'},
        menu: 'article'
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/article',
    name: '讨论区',
    meta: {title: '讨论区', icon: 'tree'},
    children: [
      {
        path: 'article',
        name: '文章',
        component: _import('article/article'),
        meta: {title: '文章', icon: 'example'},
        menu: 'article'
      },
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/',
    name: '',
    meta: {title: '添加角色', icon: 'table'},
    children: [
      {
        path: '', name: '添加角色', component: _import('user/user'), meta: {title: '添加角色', icon: 'user'}, menu: 'user'
      },
      {
        path: 'role',
        name: '权限管理',
        component: _import('user/role'),
        meta: {title: '权限管理', icon: 'password'},
        menu: 'role'
      },
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]
