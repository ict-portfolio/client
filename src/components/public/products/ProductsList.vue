<template>
        <div class="flex flex-wrap gap-1 p-1 sm:gap-4 sm:p-3" :class="products.length >= 4 ? 'justify-center' : 'justify-normal'">
            <ProductCard data-aos="fade-up" :data-aos-delay="index * 100" :product="product"  v-for="product , index in products" :key="product.id" />
        </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    components: { ProductCard }
}
</script>

<style scoped>

</style>