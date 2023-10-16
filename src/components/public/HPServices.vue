<template>
    <div  class="px-2 py-6 sm:px-12">
        <div class="flex flex-col items-center">
            <h1 class="p-2 text-3xl font-semibold text-center sm:text-5xl text-primary">
                Our Awesome Services
            </h1>
            <p class="p-2 mb-10 text-sm text-center sm:w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ratione quis eligendi error .Non ratione quis eligendi error.
            </p>
        </div>
        
        <div v-if="services.length" class="flex-wrap justify-around sm:flex">
            <div data-aos="fade-up" :data-aos-delay="index * 100" class="sm:w-[48%] md:w-[30%] overflow-hidden rounded-xl my-6" v-for="service , index in services" :key="service.id">
                <router-link :to="{name : 'ServiceView' , params : {slug : service.slug}}">
                    <img class="w-full shadow-lg sm:h-[180px] rounded-b-2xl hover:scale-105 transition duration-500 md:h-[240px]" :src="filePath.imagePath(service.image.image)" alt="">
                    <h3 class="mt-3 font-sans text-sm"> {{ service.created_at }}</h3>
                    <h1 class="text-[1.4rem] text-dense">{{ service.name }}</h1>
                </router-link>
            </div>
        </div>
        <p v-else class="my-4 text-lg text-center text-danger">" Unable to show services due to maintenance break! "</p>
        <div v-if="services.length" class="flex justify-center my-4">
            <router-link class="px-6 py-2 text-white rounded-full animate-bounce bg-secondary" :to="{name : 'ServicesPage'}">
                See More
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
                ApiService.get('get-limited-services').then((res) => {
                    this.services = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>