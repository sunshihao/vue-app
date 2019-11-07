import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [

    // 重定向
    { path: '/', redirect: '/home' },
    {
      // 首页
      path: '/home',
      name: 'home',
      meta: { id: 1, title: '首页' },
      component: () => import('@/views/home/index')
    },
    {
      // 分类
      path: '/goodsDetails',
      name: 'goodsDetails',
      meta: { id: 2, title: '购物车' },
      component: () => import('@/views/goodsDetails')
    }, {
      // 购物车
      path: '/shoppingCart',
      name: 'shoppingCart',
      meta: { id: 3, title: '订单' },
      component: () => import('@/views/shoppingCart')
    },
    {
      // 我的
      path: '/user',
      name: 'user',
      meta: { id: 4, title: '我的' },
      component: () => import('@/views/userCenter')
    },
    {
      // 错误页面
      path: '/404',
      name: '404',
      meta: { id: 404, title: '404' },
      component: () => import('@/404.vue')
    },
    {
      path: '*', // 此处需特别注意置于最底部
      redirect: '/404'
    }
  ]
})
// 路由切换效果
window.addEventListener(
  "popstate",
  function (e) {
    router.isBack = true;
  },
  false
);

// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
    next()
  }
})
export default router