import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { title: '撿到寶 | 首頁' }
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('../views/ServiceView.vue'),
        meta: { title: '撿到寶 | 服務介紹' }
      },
      {
        path: 'works',
        name: 'works',
        component: () => import('../views/WorksView.vue'),
        meta: { title: '撿到寶 | 設計作品' }
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/OrderView.vue'),
        meta: { title: '撿到寶 | 設計作品-服務購買' }
      },
      {
        path: 'adopt',
        name: 'adopt',
        component: () => import('../views/AdoptView.vue'),
        meta: { title: '撿到寶 | 領養專區' }
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../views/ProfileView.vue'),
        meta: { title: '撿到寶 | 領養專區-等家故事' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior(to) {
    // 將頁面滾動到頂部
    if (to.hash) {
      return {
        el: to.hash
      }
    } else {
      return {
        // 將頁面滾動到頂部
        top: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
