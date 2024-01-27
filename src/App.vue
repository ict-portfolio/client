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
}
/* .breadcamp {
  background-color: #232B3C;
} */
</style>