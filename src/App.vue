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
    font-family: roboto;
    src: url('./assets/roboto.ttf');
  }
  body {
    font-family: roboto;
  }
  .breadcamp {
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
}
</style>