<template>
    <div class="items-center justify-around px-2 pt-4 my-12 wrapper sm:flex">
        <div class="sm:w-[45%] pt-8 sm:pt-0">
            <h1 class="text-3xl font-semibold leading-tight text-primary sm:text-5xl">We Are Increasing Business Success With Technology</h1>
            <p class="py-6 text-gray-3">Our Software Development Service is your key to unlocking a new realm of possibilities. Here's why you can trust us to drive your business forward:</p>
            <ul class="text-black list-[square] mb-8 ml-8 list-none">
                <li class="my-2">Tailored Solutions for Every Need</li>
                <li class="my-2">User-Centric Design</li>
                <li class="my-2">Robust Security Measures</li>
                <li class="my-2">Scalability for Growth</li>
                <li class="my-2">Continuous Support and Maintenance</li>
            </ul>
            <router-link :to="{name : 'ServicesPage'}" class="px-6 py-3 text-white transition duration-300 border rounded-full shadow-lg hover:text-primary border-primary hover:bg-white bg-primary">Discover More</router-link>
        </div>
        <img class="w-full mt-8 sm:w-1/3 sm:mt-0" src="@/assets/business_woman.png" alt="">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.wrapper {
    background-image: url('@/assets/circuit_bg.jpg');
    background-size: cover;
    background-position: center;
}
</style>