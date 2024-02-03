<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">{{ category.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'RootCategoryPage' , params : {rootCategory : rootSlug}}">{{ category?.root_category?.name }}</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ category.name }}</span>
            </p>
        </div>
        <main>
            <div class="flex flex-wrap gap-2 p-1 sm:p-3" v-if="category?.products?.length">
                <ProductCard :product="product" v-for="product in category.products" :key="product.id"  />
            </div>
            <div class="flex flex-wrap gap-2 p-1 sm:p-3" v-else-if="category?.services?.length">
                <ServiceCard :service="service" v-for="service in category.services" :key="service.id" />
            </div>
        </main>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import ProductCard from '@/components/public/products/ProductCard'
import ServiceCard from '@/components/public/services/ServiceCard'
    export default {
        components : {
            ProductCard , ServiceCard
        },
        data () {
            return {
                rootSlug : this.$route.params.rootCategory,
                categorySlug : this.$route.params.category,
                category : {}
            }
        },
        watch : {
            $route (to) {
                this.rootSlug = to.params.rootCategory;
                this.categorySlug = to.params.category;
                this.getCategory();
            }
        },
        mounted () {
            this.getCategory();
        },
        methods : {
            getCategory () {
                ApiService.get(`category/${this.categorySlug}`).then((res) => {
                    console.log(res.data.data);
                    this.category = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>