<template>
    <div  class="px-2 py-6 sm:px-12">
        <div class="flex flex-col items-center">
            <h1 class="p-2 text-3xl font-semibold text-center sm:text-5xl text-primary">
                Our Awesome Services
            </h1>
            <p class="p-2 text-sm text-center sm:w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ratione quis eligendi error .Non ratione quis eligendi error.
            </p>
        </div>
        <ServicesList :services="services" v-if="services.length" />
        <div v-if="services.length" class="flex justify-center my-3">
            <router-link class="px-10 py-2 font-bold text-white rounded-full bg-secondary hover:bg-secondary/80" :to="{name : 'ServicesPage'}">
                See More
            </router-link>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import ServicesList from './services/ServicesList.vue';
    export default {
        components : {
            ServicesList
        },
        data() {
            return {
                services : [],
            }
        },
        mounted() {
            this.getServices();
        },
        methods : {
            getServices() {
                ApiService.get('services?limit=4').then((res) => {
                    this.services = res.data.data.services
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>