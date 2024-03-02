<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
import {useAuthStore} from '@/stores/auth'
  export default {
    data() {
      return {
        authStore : useAuthStore()
      }
    },
    async mounted() {
      await this.authStore.getUser();
      this.authStore.filterRole();
    }
  }
</script>

<style>
  body::-webkit-scrollbar {
    display: none;
  }
  
  @font-face {
    font-family: raleway;
    src: url('@/assets/raleway.ttf');
  }
  @font-face {
    font-family: inter;
    src: url('./assets/inter.ttf');
  }
  body {
    font-family: raleway;
  }
  h1 , nav , footer {
    font-family: inter;
    }
  .breadcamp {
    background-image: url('@/assets/bread.png');
    background-size: cover;
    background-position: center;
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    font-weight: 700;
    color: white;
}
</style>