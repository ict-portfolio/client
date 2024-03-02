<template>
    <div>
        <div class="w-full py-1 mb-6 sm:pb-4 sm:pt-1 breadcamp">
            <h1 class="my-4 text-xl text-center text-white sm:text-5xl">{{ product.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 5px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ProductsPage'}">products</router-link>
                <span style="margin: 0px 5px;" class="material-icons-outlined">navigate_next</span>
                <span class="line-clamp-1">{{ product.name }}</span>
            </p>
        </div>
        <div class="flex-wrap justify-center p-1 md:flex">
            <div class="md:w-[45%] mx-3" v-if="product.images?.length">
                <figure>
                    <img class="w-full mx-auto rounded aspect-video" :src="defaultImage" alt="">
                </figure>
                <div class="flex flex-wrap justify-center w-full gap-1 mt-4">
                    <img
                        v-for="image in product?.images"
                        :key="image.id" :src="image?.image?.url"
                        @click="defaultImage = image?.image?.url"
                        class="w-[18%] border border-gray-2 aspect-[4/3] p-1 rounded cursor-pointer hover:scale-105 transition-all duration-500"
                        alt="">
                </div>
            </div>
            <div class="md:w-[45%] mx-3 my-6 md:my-0 md:px-4">
                <h1 class="text-2xl font-bold">{{ product.name }}</h1>
                <p class="my-2 font-sans text-2xl text-green">
                    <span v-if="product.discount > 0">
                    <span class="mr-2 strikethrough text-gray-1 text-neutral" >{{ `Ks ${product.price}` }}</span>
                    <span>Ks {{ product.price - (product.price * product.discount/100) }}</span>
                    </span>
                    <span v-else>$ {{ product.price }}</span>
                </p>
                <p class="my-2 font-semibold"> - 
                    <span class="text-green" v-if="product.instock">Instock Now</span>
                    <span class="text-danger" v-else>Out of Stock</span>
                </p>
                <h5 v-if="product.discount > 0" class="flex items-center mb-4 text-lg font-semibold text-danger">
                    <span style="font-size: 1.2rem;" class="material-icons-round">discount</span>
                    <span class="ml-1.5 font-sans text-success">{{ product.discount }}%</span>
                    <span class="ml-2 font-sans">( Save - Ks{{ " " }} {{ product.price * product.discount/100 }})</span>
                </h5>
                <p v-html="product.specification" class="mb-4"></p>
                <p class="my-3 text-sm">Read description below.</p>
                <button class="flex items-center px-4 py-2 mt-2 font-semibold text-white rounded bg-green hover:bg-green/80">
                    <span class="material-icons-round">shopping_cart</span>
                    <span class="ml-2">buy now</span>
                </button>
            </div>
        </div>
        <div class="flex justify-center p-1 my-2 md:my-8">
            <div class="md:w-[90%]">
                <h1 class="mb-2 text-lg font-semibold">Description</h1>
                <p v-html="product.description"></p>
            </div>
        </div>
        <div class="my-20">
            <h1 class="mt-3 text-xl font-semibold text-center">Related Products</h1>
            <ProductsList :products="relatedProducts" />
        </div>
    </div>
</template>

<script>
import ProductsList from '@/components/public/products/ProductsList.vue';
import ApiService from '@/services/ApiService';

    export default {
        components : {ProductsList},
        data() {
            return {
                slug : this.$route.params.slug,
                product : {},
                defaultImage : '',
                relatedProducts : []
            }
        },
        watch : {
            $route (to) {
                this.slug = to.params.slug;
                this.getProduct();
            }
        },
        mounted () {
            this.getProduct();
        },
        methods : {
            async getProduct () {
                ApiService.get(`products/${this.slug}`).then((res) => {
                    console.log(res.data.data);
                    this.product = res.data.data
                    this.defaultImage = this.product?.images[0]?.image?.url;
                    this.getRelatedProducts(this.product.id , this.product.category_id)
                }).catch((res) => {
                    console.log(res);
                })
            },
            getRelatedProducts (p , c) {
                ApiService.get(`related-products/{${p}}/${c}`).then((res) => {
                    this.relatedProducts = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
.strikethrough {
  position: relative;
}
.strikethrough:before {
  position: absolute;
  content: "";
  left: 0;
  top: 50%;
  right: 0;
  border-top: 2px solid;
  border-color: rgba(10, 0, 10, 0)30;
  
  -webkit-transform:rotate(12deg);
  -moz-transform:rotate(12deg);
  -ms-transform:rotate(12deg);
  -o-transform:rotate(12deg);
  transform:rotate(12deg);
}
ol , ul {
    list-style: circle;
}
li {
    list-style-type:circle;
}
.breadcamp {
    color: white;
    background-size: cover;
    background-position: center;
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    font-weight: 600;
}
</style>