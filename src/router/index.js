import { createRouter, createWebHistory } from 'vue-router'

import PublicLayout from '@/layouts/PublicLayout.vue'
// import IndexPage from '@/views/public/IndexPage.vue'

// import AdminDashboardLayout from '@/layouts/AdminDashboardLayout.vue'
// import AdminDashboardPage from '@/views/admin/AdminDashboardPage.vue'

// import AdminGalleryPage from '@/views/admin/AdminGalleryPage.vue'
// import AdminCategoriesPage from '@/views/admin/AdminCategoriesPage.vue'
// import AdminContentsPage from '@/views/admin/AdminContentsPage.vue'
// import AdminServicePage from '@/views/admin/AdminServicePage.vue'

const routes = [
  {
    path : '/',
    name : 'PublicLayout',
    component : PublicLayout,
    children : [
      {
        path : '',
        name : 'IndexPage',
        component : () => import('@/views/public/IndexPage.vue')
      },
      {
        path : 'services',
        name : 'ServicesPage',
        component : () => import('@/views/public/ServicesPage.vue')
      },
      {
        path : 'services/:slug',
        name : 'ServiceView',
        component : () => import('@/views/public/ServiceView.vue')
      },
      {
        path : 'contents',
        name : 'ContentsPage',
        component : () => import('@/views/public/ContentsPage.vue')
      },
      {
        path : 'contents/:slug',
        name : 'ContentView',
        component : () => import('@/views/public/ContentView.vue')
      },
      {
        path : 'categories/:slug',
        name : 'ContentsByCategory',
        component : () => import('@/views/public/ContentsByCategory.vue')
      },
      {
        path : 'about',
        name : 'AboutPage',
        component : () => import('@/views/public/AboutPage.vue')
      },
      {
        path : 'contact',
        name : 'ContactPage',
        component : () => import('@/views/public/ContactPage.vue')
      },
    ]
  },
  
  {
    path : '/login',
    name : 'LoginPage',
    component : () => import('@/views/auth/LoginPage.vue')
  },
  {
    path : '/register',
    name : 'RegisterPage',
    component : () => import('@/views/auth/RegisterPage.vue')
  },

  {
    path : '/admin',
    name : 'AdminDashboardLayout',
    component : () => import('@/layouts/AdminDashboardLayout.vue'),
    children : [
      {
        path : '',
        name : 'AdminDashboardPage',
        component : () => import('@/views/admin/AdminDashboardPage.vue')
      },
      {
        path : 'gallery',
        name : 'AdminGalleryPage',
        component : () => import('@/views/admin/AdminGalleryPage.vue')
      },
      {
        path : 'categories',
        name : 'AdminCategoriesPage',
        component : () => import('@/views/admin/AdminCategoriesPage.vue')
      },
      {
        path : 'contents',
        name : 'AdminContentsPage',
        component : () => import('@/views/admin/AdminContentsPage.vue')
      },
      {
        path : 'services',
        name : 'AdminServicePage',
        component : () => import('@/views/admin/AdminServicePage.vue')
      },
      {
        path : 'contacts',
        name : 'AdminContactsPage',
        component : () => import('@/views/admin/AdminContactsPage.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
