import { createRouter, createWebHistory } from 'vue-router'

import AdminDashboardPage from '@/views/admin/AdminDashboardPage.vue'
import AdminGalleryPage from '@/views/admin/AdminGalleryPage.vue'
import AdminRootCategoriesPage from '@/views/admin/AdminRootCategoriesPage.vue'
import AdminCategoriesPage from '@/views/admin/AdminCategoriesPage.vue'

import AdminServicePage from '@/views/admin/services/AdminServicePage.vue'
import AdminServiceDetails from '@/views/admin/services/AdminServiceDetails.vue'
import CreateService from '@/views/admin/services/CreateService.vue'
import EditService from '@/views/admin/services/EditService.vue'

import AdminContents from '@/views/admin/contents/AdminContents.vue'
import AdminCreateContent from '@/views/admin/contents/AdminCreateContent.vue'
import AdminEditContent from '@/views/admin/contents/AdminEditContent.vue'
import AdminDetailContent from '@/views/admin/contents/AdminDetailContent.vue'

import AdminProductsPage from '@/views/admin/products/AdminProductsPage.vue'
import CreateProduct from '@/views/admin/products/CreateProduct.vue'
import AdminProductDetails from '@/views/admin/products/AdminProductDetails.vue'
import EditProduct from '@/views/admin/products/EditProduct.vue'

import AdminRoadmapPage from '@/views/admin/roadmap/RoadmapView.vue'
import CreateRoadmap from '@/views/admin/roadmap/CreateRoadmap.vue'
import EditRoadmap from '@/views/admin/roadmap/EditRoadmap.vue'

import UserManagement from '@/views/admin/UserManagement.vue'
import AdminContactsPage from '@/views/admin/AdminContactsPage.vue'

const routes = [
  {
    path : '/',
    name : 'PublicLayout',
    component : () => import('@/layouts/PublicLayout.vue'),
    children : [
      {
        path : '',
        name : 'IndexPage',
        component : () => import('@/views/public/IndexPage.vue')
      },
      {
        path : 'categories/:rootCategory',
        name : 'RootCategoryPage',
        component : () => import('@/views/public/categories/RootCategoryPage.vue')
      },
      {
        path : 'categories/:rootCategory/:category',
        name : 'CategoryPage',
        component : () => import('@/views/public/categories/CategoryPage.vue')
      },
      {
        path : 'products',
        name : 'ProductsPage',
        component : () => import('@/views/public/products/ProductsPage.vue')
      },
      {
        path : 'products/:slug',
        name : 'ProductDetails',
        component : () => import('@/views/public/products/ProductDetails.vue')
      },
      {
        path : 'services',
        name : 'ServicesPage',
        component : () => import('@/views/public/services/ServicesPage.vue')
      },
      {
        path : 'services/:slug',
        name : 'ServiceDetails',
        component : () => import('@/views/public/services/ServiceDetails.vue')
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
    meta : {
      middleware : 'admin'
    },
    children : [
      {
        path : '',
        name : 'AdminDashboardPage',
        component : AdminDashboardPage
      },
      {
        path : 'gallery',
        name : 'AdminGalleryPage',
        component : AdminGalleryPage
      },
      {
        path : 'root-categories',
        name : 'AdminRootCategoriesPage',
        component : AdminRootCategoriesPage
      },
      {
        path : 'categories',
        name : 'AdminCategoriesPage',
        component : AdminCategoriesPage
      },
      {
        path : 'services',
        name : 'AdminServicePage',
        component : AdminServicePage
      },
      {
        path : 'services/:id',
        name : 'AdminServiceDetails',
        component : AdminServiceDetails
      },
      {
        path : 'services/create',
        name : 'CreateService',
        component : CreateService
      },
      {
        path : 'services/edit/:id',
        name : 'EditService',
        component : EditService
      },
      {
        path : 'contents',
        name : 'AdminContents',
        component : AdminContents
      },
      {
        path : 'contents/:id',
        name : 'AdminDetailContent',
        component : AdminDetailContent
      },
      {
        path : 'contents/create',
        name : 'AdminCreateContent',
        component : AdminCreateContent
      },
      {
        path : 'contents/edit/:id',
        name : 'AdminEditContent',
        component : AdminEditContent
      },
      {
        path : 'contacts',
        name : 'AdminContactsPage',
        component : AdminContactsPage
      },
      {
        path : 'roadmap',
        name : 'AdminRoadmapPage',
        component : AdminRoadmapPage
      },
      {
        path : 'roadmap/create',
        name : 'CreateRoadmap',
        component : CreateRoadmap
      },
      {
        path : 'roadmap/:id',
        name : 'EditRoadmap',
        component : EditRoadmap
      },
      {
        path : 'user-management',
        name : 'UserManagement',
        component : UserManagement
      },
      {
        path : 'products',
        name : 'AdminProducts',
        component : AdminProductsPage
      },
      {
        path : 'products/create',
        name : 'CreateProduct',
        component : CreateProduct
      },
      {
        path : 'products/:id',
        name : 'AdminProductDetails',
        component : AdminProductDetails
      },
      {
        path : 'products/edit/:id',
        name : 'EditProduct',
        component : EditProduct
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/public/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

import { useAuthStore } from '@/stores/auth'

router.beforeEach(async (to , from , next) => {
  if (to.meta.middleware == 'admin') {
    let authStore = useAuthStore();
    await authStore.getUser();
    if (authStore.authenticated && authStore.user.email) {
      let authorized = authStore.user.roles.find((role) => role.name == 'admin')
      if (authorized && authorized.id) {
        next();
      } else {
        authStore.destroyAuth()
        next({name : 'LoginPage'})
      }
    } else {
      authStore.destroyAuth()
      next({name : 'LoginPage'});
    }
  } else {
    next();
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})
export default router
