<template>
    <div class="relative">
        <div class="fixed p-6 text-white md:w-1/3 sm:w-1/2 top-1/2 left-1/2" style="transform: translate(-50% , -50%);background: rgb(45,164,253);background: linear-gradient(0deg, rgba(45,164,253,1) 0%, rgba(114,45,253,1) 100%);">
            <h1 class="my-4 text-3xl italic text-center">FIRST ICT</h1>
            <div class="my-4">
                <label for="email">Email</label>
                <input class="w-full px-2 py-1 mt-1 bg-transparent border border-white rounded outline-none" type="email" required name="email" id="email">
            </div>
            <div class="my-4">
                <label for="password">Password</label>
                <input class="w-full px-2 py-1 mt-1 bg-transparent border border-white rounded outline-none" type="password" required name="password" id="password">
            </div>
            <div class="flex justify-between my-4">
                <p>Doesn't have an account? <router-link class="ml-2 underline" to="/">Sign Up</router-link></p>
                <button class="px-6 py-1 bg-white rounded h-fit text-gray-1">sign in</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>