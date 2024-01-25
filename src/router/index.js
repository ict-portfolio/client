import { createRouter, createWebHistory } from 'vue-router'

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
        component : () => import('@/views/admin/AdminDashboardPage.vue')
      },
      {
        path : 'gallery',
        name : 'AdminGalleryPage',
        component : () => import('@/views/admin/AdminGalleryPage.vue')
      },
      {
        path : 'root-categories',
        name : 'AdminRootCategoriesPage',
        component : () => import('@/views/admin/AdminRootCategoriesPage.vue')
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
      {
        path : 'roadmap',
        name : 'AdminRoadmapPage',
        component : () => import('@/views/admin/roadmap/RoadmapView.vue')
      },
      {
        path : 'roadmap/create',
        name : 'CreateRoadmap',
        component : () => import('@/views/admin/roadmap/CreateRoadmap.vue')
      },
      {
        path : 'roadmap/:id',
        name : 'EditRoadmap',
        component : () => import('@/views/admin/roadmap/EditRoadmap.vue')
      },
      {
        path : 'user-management',
        name : 'UserManagement',
        component : () => import('@/views/admin/UserManagement.vue')
      },
      {
        path : 'products',
        name : 'AdminProducts',
        component : () => import('@/views/admin/products/AdminProductsPage.vue')
      },
      {
        path : 'products/create',
        name : 'CreateProduct',
        component : () => import('@/views/admin/products/CreateProduct.vue')
      },
      {
        path : 'products/:id',
        name : 'AdminProductDetails',
        component : () => import('@/views/admin/products/AdminProductDetails.vue')
      },
      {
        path : 'products/edit/:id',
        name : 'EditProduct',
        component : () => import('@/views/admin/products/EditProduct.vue')
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
