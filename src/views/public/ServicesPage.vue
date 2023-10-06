<template>
    <div  class="flex-wrap justify-around sm:flex">
        <div class="flex justify-center w-full pb-12 mb-6 pt-36 breadcamp">
            <p class="flex items-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>Services</span>
            </p>
        </div>
        <div data-aos="fade-up" :data-aos-delay="index * 100" class="sm:w-[48%] md:w-[30%] px-2 sm:px-0 overflow-hidden rounded-2xl my-10" v-for="service,index in services" :key="service.id">
            <router-link :to="{name : 'ServiceView' , params : {slug : service.slug}}">
                <img class="w-full shadow-lg sm:h-[180px] rounded-2xl hover:scale-105 transition duration-500 md:h-[240px]" :src="filePath.imagePath(service.image.image)" alt="">
                <h3 class="mt-3 text-sm"> {{ service.created_at }}</h3>
                <h1 class="text-[1.4rem] text-dense">{{ service.name }}</h1>
            </router-link>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';

    export default {
        data() {
            return {
                services : [],
                filePath : filePath
            }
        },
        mounted() {
            this.getServices();
        },
        methods : {
            getServices() {
                ApiService.get('get-services').then((res) => {
                    this.services = res.data.data;
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>