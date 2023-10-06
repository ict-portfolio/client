<template>
    <div class="items-center justify-around px-2 pt-4 my-12 wrapper sm:flex">
        <div class="sm:w-[45%] pt-8 sm:pt-0">
            <h1 class="text-3xl leading-tight text-primary sm:text-5xl">We Are Increasing Business Success With Technology</h1>
            <p class="py-6 text-gray-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet suscipit quos perspiciatis sint quibusdam aut earum ex ratione maxime, impedit fuga repudiandae minima. Debitis nam quam soluta explicabo delectus!</p>
            <ul class="text-black list-[square] mb-8 ml-8">
                <li class="my-2">Amazing Communication</li>
                <li class="my-2">Best trending designing experience</li>
                <li class="my-2">Email & Live chat.</li>
            </ul>
            <router-link :to="{name : 'ContactPage'}" class="px-6 py-3 text-white transition duration-300 border rounded-full shadow-lg hover:text-primary border-primary hover:bg-white bg-primary">Discover More</router-link>
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