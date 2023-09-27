import { createRouter, createWebHistory } from 'vue-router'

import PublicLayout from '@/layouts/PublicLayout.vue'
import IndexView from '@/views/public/IndexView.vue'

import AdminDashboardLayout from '@/layouts/AdminDashboardLayout.vue'
import AdminDashboardPage from '@/views/admin/AdminDashboardPage.vue'

import AdminCategoriesPage from '@/views/admin/AdminCategoriesPage.vue'
import AdminGalleryPage from '@/views/admin/AdminGalleryPage.vue'

const routes = [
  {
    path : '/',
    name : 'PublicLayout',
    component : PublicLayout,
    children : [
      {
        path : '',
        name : 'IndexView',
        component : IndexView
      }
    ]
  },
  
  {
    path : '/admin',
    name : 'AdminDashboardLayout',
    component : AdminDashboardLayout,
    children : [
      {
        path : '',
        name : 'AdminDashboardPage',
        component : AdminDashboardPage
      },
      {
        path : 'categories',
        name : 'AdminCategoriesPage',
        component : AdminCategoriesPage
      },
      {
        path : 'gallery',
        name : 'AdminGalleryPage',
        component : AdminGalleryPage
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
