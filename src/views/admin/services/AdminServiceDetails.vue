<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">{{ slug }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'AdminServicePage'}">Services</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ slug }}</span>
            </p>
        </div>
        <h1 class="text-center text-[30px]">Service Details</h1>
        <div class="flex flex-col items-center ">
            <div class="mx-20 w-[80%] py-5 md:px-28">
                <div class="flex items-center">
                    <img style="width: 50px;height: 50px;" src="../../../assets/proposal.jpg" alt="">
                    <span class="px-5 text-[24px]">Proposal</span>
                </div>
                <p class="my-4 text-[18px]">{{ service.proposal }}</p>
            </div>
            <div class="mx-20 w-[80%] py-5 md:px-28">
                <div class="flex items-center">
                    <img style="width: 50px;height: 50px;" src="../../../assets/energy.jpg" alt="">
                    <span class="px-5 text-[24px]">Features</span>
                </div>
                <p class="my-4 text-[18px]">{{ service.features }}</p>
            </div> 
        </div>
        <h1 class="text-center text-[30px]">Image Description</h1>
        <div class="flex flex-col w-full mt-5  items-center">
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 block ">
                <img class="w-[50%] mx-24 my-3" :src="service.default_image" alt="">
                <img class="w-[50%] mx-24 my-3" :src="service.default_image" alt="">
                <img class="w-[50%] mx-24 my-3" :src="service.default_image" alt="">
                <img class="w-[50%] mx-24 my-3" :src="service.default_image" alt="">
                <img class="w-[50%] mx-24 my-3" :src="service.default_image" alt="">
                <img class="w-[50%] mx-24 my-3" :src="service.default_image" alt="">

            </div>
        </div>
        <div class="flex flex-col  items-center">
            <div class="mx-20 w-[80%] py-10 md:px-28">
                <div class="flex items-center">
                    <img style="width: 50px;height: 50px;" src="../../../assets/energy.jpg" alt="">
                    <span class="px-5 text-[24px]">Terms & Conditions</span>
                </div>
                    <p class="my-4 text-[18px]">{{ service.terms }}</p>
            </div> 
        </div>
        <div class="flex justify-end px-24 text-white my-4">
            <router-link class="bg-primary py-2 px-3" :to="{name : 'EditService'}"><span class="material-icons-outlined">edit</span></router-link>
            <button @click="deleteService" class="bg-danger py-2 px-3"><span class="material-icons-outlined">delete</span></button>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService'
    export default {
        data() {
            return {
                service : {}
            }
        },
        methods : {
            deleteService () {
                ApiService.delete(`admin/services/${this.service.id}`).then(() => {
                    this.$router.push({name : 'AdminServicePage'})
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted () {
            ApiService.get(`admin/services/${this.$route.params.id}`).then((res) => {
                this.service = res.data.data
                console.log(res.data.data);
            }).catch((res) => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>

</style>