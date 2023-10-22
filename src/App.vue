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
  /* .breadcamp {
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
} */
.breadcamp {
  background-color: #232B3C;
  /* background: rgb(51,63,85);
background: radial-gradient(circle, rgba(51,63,85,1) 0%, rgba(34,42,59,1) 100%); */
}
</style>