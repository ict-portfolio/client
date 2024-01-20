<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">{{ slug }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ProductsPage'}">products</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ slug }}</span>
            </p>
        </div>
        details of single product
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slug : this.$route.params.slug
            }
        }
    }
</script>

<style scoped>

</style>