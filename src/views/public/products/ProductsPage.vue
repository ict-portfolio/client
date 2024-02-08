<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">Products</h1>
            <p class="flex items-center justify-center text-lg font-semibold text-white">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span class="text-secondary">Products</span>
            </p>
        </div>
        <ProductsList :products="products" />
        <MainPagination class="w-full my-6" v-if="paginationData.current_page"  :paginationProp="paginationData" @next="paginate" @previous="paginate" @random="paginate" />
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import MainPagination from '@/components/base/MainPagination.vue'
import ProductsList from '@/components/public/products/ProductsList.vue';
    export default {
        components : {
            MainPagination , ProductsList
        },
        data () {
            return {
                products : [],
                paginationData : {}
            }
        },
        mounted() {
            this.getProducts(1);
        },
        methods : {
            getProducts(page) {
                ApiService.get(`products?page=${page}&limit=12`).then((res) => {
                    this.products = res.data.data.products; 
                    this.paginationData = res.data.data.meta;
                    window.scrollTo('0px' , '0px');
                }).catch((res) => {
                    console.log(res);
                })
            },
            paginate(page){
                this.getProducts(page)
            },
        }
    }
</script>

<style scoped>

</style>