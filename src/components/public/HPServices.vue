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
        
        <div v-if="services.length" class="flex flex-wrap gap-1 p-1 sm:gap-2 sm:p-3">
            <ServiceCard data-aos="fade-up" :data-aos-delay="index * 100" :service="service"  v-for="service , index in services" :key="service.id" />
        </div>
        <p v-else class="my-4 text-lg text-center text-danger">" Unable to show services due to maintenance break! "</p>
        <div v-if="services.length" class="flex justify-center my-6">
            <router-link class="px-6 py-2 text-white rounded-full bg-secondary" :to="{name : 'ServicesPage'}">
                See More
            </router-link>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
import ServiceCard from '@/components/public/services/ServiceCard.vue';
    export default {
        components : {
            ServiceCard
        },
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
                ApiService.get('services').then((res) => {
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