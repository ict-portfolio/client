<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center sm:text-5xl">Services</h1>
            <p class="flex items-center justify-center text-lg font-semibold">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span class="text-secondary">Services</span>
            </p>
        </div>
        <ServicesList :services="services" />
        <MainPagination class="w-full my-6" v-if="paginationData.current_page"  :paginationProp="paginationData" @next="paginate" @previous="paginate" @random="paginate" />
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import MainPagination from '@/components/base/MainPagination.vue'
import ServicesList from '@/components/public/services/ServicesList.vue';
    export default {
        components : {
            MainPagination , ServicesList
        },
        data() {
            return {
                services : [],
                paginationData : {}
            }
        },
        mounted() {
            this.getServices(1);
        },
        methods : {
            getServices(page) {
                ApiService.get(`services?page=${page}&limit=12`).then((res) => {
                    this.services = res.data.data.services; 
                    this.paginationData = res.data.data.meta;
                    window.scrollTo('0px' , '0px');
                }).catch((res) => {
                    console.log(res);
                })
            },
            paginate(page){
                this.getServices(page)
            },
        }
    }
</script>

<style scoped>

</style>