<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  body::-webkit-scrollbar {
    display: none;
  }
  
  @font-face {
    font-family: raleway;
    src: url('./assets/raleway.ttf');
  }
  body {
    font-family: raleway;
  }
  .breadcamp {
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
}
</style>