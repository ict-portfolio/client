<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">{{ product.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ProductsPage'}">products</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ product.name }}</span>
            </p>
        </div>
        <div class="flex-wrap justify-center p-1 md:flex">
            <div class="md:w-[45%] mx-1" v-if="product.images?.length">
                <figure>
                    <img class="w-full mx-auto rounded" :src="defaultImage" alt="">
                </figure>
                <div class="flex w-full mt-4">
                    <img v-for="image in product?.images" :key="image.id" :src="image?.image?.url"  @click="defaultImage = image?.image?.url" class="w-[22%] mx-auto rounded cursor-pointer hover:scale-105 transition-all duration-500" alt="">
                </div>
            </div>
            <div class="md:w-[45%] mx-1 my-6 md:my-0 md:px-4">
                <h1 class="text-2xl font-bold">{{ product.name }}</h1>
                <p class="my-2 font-sans text-xl text-primary">
                    <span v-if="product.discount > 0">
                    <span class="mr-2 line-through text-neutral" >{{ `$ ${product.price}` }}</span>
                    <span>${{ product.price - (product.price * product.discount/100) }}</span>
                    </span>
                    <span v-else>$ {{ product.price }}</span>
                </p>
                <h5 v-if="product.discount > 0" class="mb-4">Current Discount - <span class="font-sans text-lg text-success">{{ product.discount }}%</span></h5>
                <h6 class="mt-1 text-lg font-semibold">Product Information</h6>
                <p v-html="product.description" class="mb-4"></p>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';

    export default {
        data() {
            return {
                slug : this.$route.params.slug,
                product : {},
                defaultImage : ''
            }
        },
        watch : {
            $route (to) {
                this.slug = to.params.slug;
            }
        },
        mounted () {
            this.getProduct();
        },
        methods : {
            getProduct () {
                ApiService.get(`products/${this.slug}`).then((res) => {
                    console.log(res.data.data);
                    this.product = res.data.data
                    this.defaultImage = this.product?.images[0]?.image?.url;
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>