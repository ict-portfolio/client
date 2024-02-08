<template>
    <div>
        <div class="w-full py-12 mb-6 text-white breadcamp">
            <h1 class="my-4 text-2xl text-center sm:text-5xl">{{ category.name }}</h1>
            <p class="flex items-center justify-center text-lg font-semibold">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'RootCategoryPage' , params : {rootCategory : rootSlug}}">{{ category?.root_category?.name }}</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span class="text-secondary">{{ category.name }}</span>
            </p>
        </div>
        <main>
            <ProductsList v-if="category?.products?.length" :products="category.products" />
            <ServicesList v-if="category?.services?.length" :services="category.services" />
        </main>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import ProductsList from '@/components/public/products/ProductsList.vue';
import ServicesList from '@/components/public/services/ServicesList.vue';
    export default {
        components : {
            ProductsList , ServicesList
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