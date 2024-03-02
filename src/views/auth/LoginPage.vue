<template>
    <div class="flex items-center justify-center w-screen h-screen p-2 background">
        <form @submit.prevent="login" class="relative sm:px-6 px-2 w-full py-10 bg-[#EFF2F3] rounded shadow-lg text-gray-1 md:w-[30%] sm:w-1/2">
            <span @click="$router.go(-1)" style="cursor: pointer; position: absolute;top: 15px;left: 10px;font-weight: 900;color: #3b3b3b;" class="material-icons-sharp">keyboard_backspace</span>
            <h1 class="pb-4 text-3xl italic font-semibold text-center text-primary">FIRST ICT</h1>
            <p v-if="errors.main" class="p-4 text-center text-white bg-danger">{{ errors.main }}</p>
            <BaseInput :error="errors.email" v-model="user.email" class="w-full" type="email" :label="'Email'" />
            <BaseInput :error="errors.password" v-model="user.password" class="w-full" type="password" :label="'Password'" />
            <button class="w-full px-6 py-2 text-white rounded bg-primary h-fit">sign in</button>
            <p class="my-6 text-center">Doesn't have an account? <router-link class="m-2 text-secondary" :to="{name : 'RegisterPage'}">Sign Up</router-link></p>
        </form>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import BaseInput from '../../components/base/BaseInput.vue'
import TokenService from '@/services/TokenService';
    export default {
        components : {
            BaseInput
        },
        data() {
            return {
                user : {
                    email : '',
                    password : ''
                },
                errors : {}
            }
        },
        methods : {
            login(){
                ApiService.post('/login' , this.user).then((res) => {
                    TokenService.setToken(res.data.data.token)
                    this.$router.push({name : 'AdminDashboardPage'})
                }).catch((res) => {
                    if(res.response && res.response.data && res.response.data.errors){
                        this.errors = res.response.data.errors
                    } else {
                        this.errors = {main : 'Internal Error !'}
                    }
                    setTimeout(() => {
                        this.errors = {}
                    } , 3000);
                })
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