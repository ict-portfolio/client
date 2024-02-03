<template>
    <div>
        <h1 class="mt-6 text-3xl font-bold text-center">{{ service.name }}</h1>
        <div class="mx-auto sm:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="@/assets/proposal.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Proposal</h3>
            </div>
            <p class="my-4" v-html="service.proposal"></p>
        </div>
        <div class="mx-auto sm:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="../../../assets/energy.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Features</h3>
            </div>
            <p class="px-4 my-4" v-html="service.features"></p>
        </div> 
        <div class="mt-5">
            <h1 class="mt-4 text-xl font-semibold text-center">{{service.image_description}}</h1>
            <div class="flex flex-wrap justify-around">
                <img v-for="img in service.images" :key="img.id" class="my-5 w-[30%] rounded" :src="img.image.url" alt="">
            </div>
        </div>
        <div class="mx-auto sm:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="../../../assets/energy.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Terms & Conditions</h3>
            </div>
                <p class="my-4" v-html="service.terms"></p>
        </div> 
        <div class="flex justify-end px-24 my-4 text-white">
            <router-link title="Edit Service" class="flex items-center justify-center p-3 mr-6 rounded-full h-fit bg-primary" :to="{name : 'EditService'}"><span class="material-icons-outlined">edit</span></router-link>
            <button title="Delete Service" @click="deleteService" class="flex items-center justify-center p-3 rounded-full h-fit bg-danger"><span class="material-icons-outlined">delete</span></button>
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