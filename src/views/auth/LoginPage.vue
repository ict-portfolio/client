<template>
    <div class="flex items-center justify-center w-screen h-screen p-2 background">
        <form class="relative sm:px-6 px-2 w-full py-10 bg-[#EFF2F3] rounded shadow-lg text-gray-1 md:w-[30%] sm:w-1/2">
            <span @click="$router.go(-1)" style="cursor: pointer; position: absolute;top: 15px;left: 10px;font-weight: 900;color: #3b3b3b;" class="material-icons-sharp">keyboard_backspace</span>
            <h1 class="pb-4 text-3xl italic font-semibold text-center text-primary">FIRST ICT</h1>
            <BaseInput v-model="user.email" class="w-full" type="email" :label="'Email'" />
            <BaseInput v-model="user.password" class="w-full" type="password" :label="'Password'" />
            <button class="w-full px-6 py-2 text-white rounded bg-primary h-fit">sign in</button>
            <p class="my-6 text-center">Doesn't have an account? <router-link class="m-2 text-secondary" :to="{name : 'RegisterPage'}">Sign Up</router-link></p>
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
                    email : '',
                    password : ''
                }
            }
        }
    }
</script>

<style scoped>
.background {
    background-image: url('@/assets/buildings.jpg');
    background-size: cover;
}
</style>