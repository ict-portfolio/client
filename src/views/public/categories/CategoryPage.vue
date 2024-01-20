<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">{{ categorySlug }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'RootCategoryPage' , params : {rootCategory : rootCategory}}">{{ rootCategory }}</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ categorySlug }}</span>
            </p>
        </div>
        Categories with related fields
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rootCategory : this.$route.params.rootCategory,
                categorySlug : this.$route.params.category
            }
        }
    }
</script>

<style scoped>

</style>