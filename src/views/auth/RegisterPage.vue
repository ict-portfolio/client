<template>
    <div class="relative flex items-center justify-center w-screen h-screen p-2 breadcamp">
        <form class="sm:px-6 px-2 w-full py-10 bg-[#EFF2F3] rounded shadow-lg text-gray-1 md:w-[30%] sm:w-1/2">
            <h1 class="pb-4 text-3xl italic text-center">FIRST ICT</h1>
            <BaseInput v-model="user.name" class="w-full" type="text" :label="'Name'" />
            <BaseInput v-model="user.email" class="w-full" type="email" :label="'Email'" />
            <BaseInput v-model="user.password" class="w-full" type="password" :label="'Password'" />
            <BaseInput v-model="user.password_confirmation" class="w-full" type="password" :label="'Confirm Password'" />
            <button class="w-full px-6 py-2 text-white rounded bg-primary h-fit">sign in</button>
            <p class="my-6 text-center">Already have an account? <router-link class="m-2 text-secondary" :to="{name : 'LoginPage'}">Sign In</router-link></p>
        </form>
    </div>
</template>

<script>
import BaseInput from '../../components/base/BaseInput.vue'
    export default {
        components : {
            BaseInput
        },
        data() {
            return {
                user : {
                    name : '',
                    email : '',
                    password : '',
                    password_confirmation : ''
                }
            }
        }

    }
</script>

<style scoped>

</style>