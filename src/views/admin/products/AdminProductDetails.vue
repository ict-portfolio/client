<template>
    <div class="flex-wrap justify-center min-h-screen p-1 py-4 md:flex sm:p-4">
        <div class="w-full h-fit">
            <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp" @click="$router.back()">arrow_back</span>
        </div>
        <div class="md:w-[45%]" v-if="product.images?.length">
            <figure>
                <img class="w-full mx-auto rounded" :src="defaultImage" alt="">
            </figure>
            <div class="flex w-full mt-4">
                <img v-for="image in product?.images" :key="image.id" :src="image?.image?.url"  @click="defaultImage = image?.image?.url" class="w-[22%] mx-auto rounded cursor-pointer" alt="">
            </div>
        </div>
        <div class="md:w-[45%] my-6 md:my-0 md:px-4">
            <h1 class="text-2xl">{{ product.name }}</h1>
            <h3 class="my-2 text-xl text-primary">Price - {{ product.price }}</h3>
            <h5 class="mb-4 text-xl">Current Discount - {{ product.discount }}%</h5>
            <h6 class="mt-1 text-xl">Specifiaction</h6>
            <p v-html="product.specification" class="mb-4"></p>
            <h6 class="mt-1 text-xl">Description</h6>
            <p v-html="product.description" class="mb-4"></p>

            <div class="flex mt-6">
                <router-link :to="{name : 'EditProduct' , params : {id : product.id}}" class="flex items-center px-3 py-3 mr-4 text-white rounded-full bg-secondary">
                    <span class="material-icons-outlined">edit</span>
                </router-link>
                <button @click="deleteProduct" class="flex items-center px-3 py-2 text-white rounded-full bg-danger">
                    <span class="material-icons-outlined">delete</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
    export default {
        data () {
            return {
                product : {},
                defaultImage : '',
            }
        },
        methods : {
            getProduct () {
                ApiService.get(`admin/products/${this.$route.params.id}`).then((res) => {
                    console.log(res);
                    this.product = res.data.data
                    this.defaultImage = this.product?.images[0]?.image?.url;
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteProduct () {
                ApiService.delete(`admin/products/${this.product.id}`).then(() => {
                    this.$router.push({name : 'AdminProducts'})
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted () {
            this.getProduct()
        }
    }
</script>

<style scoped>

</style>