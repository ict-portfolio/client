<template>
    <div>
        <div class="flex justify-center pb-12 mb-6 pt-36 breadcamp">
            <p class="flex items-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>Services</span>
            </p>
        </div>
        <div v-if="services.length" class="flex-wrap justify-around sm:flex">
            <div data-aos="fade-up" :data-aos-delay="index * 100" class="sm:w-[48%] md:w-[30%] px-2 sm:px-0 overflow-hidden rounded-2xl my-10" v-for="service,index in services" :key="service.id">
                <router-link :to="{name : 'ServiceView' , params : {slug : service.slug}}">
                    <img class="w-full shadow-lg sm:h-[180px] rounded-2xl hover:scale-105 transition duration-500 md:h-[240px]" :src="filePath.imagePath(service.image.image)" alt="">
                    <h3 class="mt-3 text-sm"> {{ service.created_at }}</h3>
                    <h1 class="text-[1.4rem] text-dense">{{ service.name }}</h1>
                </router-link>
            </div>
        </div>
        <div v-else class="flex items-center p-4 mx-auto my-12 shadow-lg w-fit">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84308 20.1979C9.8718 21.3993 10.8862 22 12 22C13.1138 22 14.1282 21.3993 16.1569 20.1979L16.8431 19.7915C18.8718 18.5901 19.8862 17.9894 20.4431 17C21 16.0106 21 14.8092 21 12.4063M20.8147 8C20.7326 7.62759 20.6141 7.3038 20.4431 7C19.8862 6.01057 18.8718 5.40987 16.8431 4.20846L16.1569 3.80211C14.1282 2.6007 13.1138 2 12 2C10.8862 2 9.8718 2.6007 7.84308 3.80211L7.15692 4.20846C5.1282 5.40987 4.11384 6.01057 3.55692 7C3 7.98943 3 9.19084 3 11.5937V12.4063C3 14.8092 3 16.0106 3.55692 17C3.78326 17.4021 4.08516 17.74 4.5 18.0802" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
            </svg>
            <p class="m-4 text-lg text-center text-danger">
                " Unable to show services due to maintenance break! "
            </p>
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