<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">Search result for <span class="underline"> {{ query }}</span></h1>
            <p class="flex items-center justify-center text-lg font-semibold text-secondary">
                <router-link to="/">Home</router-link>
                <!-- <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span class="text-secondary">Products</span> -->
            </p>
        </div>
       <div v-if="products.length">
        <h1 class="px-2 text-xl text-primary">Products</h1>
        <ProductsList :products="products" />
       </div>
       <div v-if="services.length" class="mt-10">
        <h1 class="px-2 text-xl text-primary">Services</h1>
        <ServicesList :services="services" />
       </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import ProductsList from '@/components/public/products/ProductsList.vue';
import ServicesList from '@/components/public/services/ServicesList.vue';
    export default {
        components : {
            ProductsList,ServicesList
        },
        data () {
            return {
                query : this.$route.query.query,
                products : [],
                services : []
            }
        },
        watch : {
            $route (to) {
                this.query = to.query.query;
                this.filter();
            }
        },
        methods : {
            filter() {
                ApiService.get(`search?query=${this.query}`).then((res) => {
                    console.log(res.data.data);
                    this.products = res.data.data.products;
                    this.services = res.data.data.services;
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted() {
            this.filter();
        }
    }
</script>

<style scoped>

</style>