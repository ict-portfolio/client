<template>
    <div class="flex flex-col items-center justify-center w-screen h-screen text-primary root">
        <h1 class="sm:text-[8rem] text-[6rem] font-black text-[#5BC86D] font-[Sans] tracking-widest">404</h1>
        <h3 class="my-2 text-4xl font-semibold">Oops!</h3>
        <p class="text-lg text-center">The page you were looking for doesn't exist anymore.</p>
        <router-link class="px-6 py-2 mt-4 border rounded-full shadow-xl border-primary" :to="{name : 'IndexPage'}">Back To Home</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.root {
    background-image: url('@/assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>