<template>
    <div class="bg-black">
        <MainSwiper class="z-10 w-screen h-screen opacity-75" />
        <div class="absolute z-50 w-full p-2 font-serif text-white lg:w-1/2 left-1/2 top-1/2" style="transform: translate(-50% , -50%);">
            <h1 class="p-3 text-3xl font-extrabold tracking-wider text-center md:text-6xl">Helping Business Through Technology</h1>
            <p class="my-4 font-bold text-center md:text-lg">High-performing software solutions that drive your business forward. Accelerate your software development roadmap through custom engineering solutions.</p>
            <div class="flex justify-center mt-2">
                <button class="px-6 py-2 mx-auto transition duration-300 rounded shadow-lg md:text-lg hover:bg-white hover:text-primary bg-primary">Contact Now</button>
            </div>
        </div>
        
        <HPC1 />

    </div>
</template>

<script>
import MainSwiper from '../../components/public/MainSwiper.vue'
import HPC1 from '../../components/public/HPC1.vue'
    export default {
        components : {
            MainSwiper , HPC1
        }
    }
</script>

<style scoped>

</style>