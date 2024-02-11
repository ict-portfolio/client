<template>
    <div  class="px-2 py-6 sm:px-12">
        <div class="flex flex-col items-center">
            <h1 class="p-2 text-3xl font-semibold text-center sm:text-5xl text-primary">
                Trending Products
            </h1>
            <p class="p-2 text-sm text-center sm:w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ratione quis eligendi error .Non ratione quis eligendi error.
            </p>
        </div>
        <ProductsList :products="products" />
        <div v-if="products.length" class="flex justify-center my-3">
            <router-link class="px-10 py-2 font-bold text-white rounded-full bg-secondary hover:bg-secondary/80" :to="{name : 'ProductsPage'}">
                See More
            </router-link>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
// import ProductCard from '@/components/public/products/ProductCard.vue';
import ProductsList from './products/ProductsList.vue';
    export default {
        components : {
            ProductsList
        },
        data() {
            return {
                products : [],
            }
        },
        mounted() {
            this.getProducts();
        },
        methods : {
            getProducts() {
                ApiService.get('products?limit=4').then((res) => {
                    this.products = res.data.data.products;
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>