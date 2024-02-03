<template>
    <div>
        <div class="w-full py-12 mb-6 text-white breadcamp">
            <h1 class="my-4 text-2xl text-center sm:text-5xl">{{ rootSlug }}</h1>
            <p class="flex items-center justify-center text-lg font-semibold">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span class="text-secondary">{{ rootSlug }}</span>
            </p>
        </div>
        Root Categories list with sub categories and related fields
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rootSlug : this.$route.params.rootCategory
            }
        },
        watch : {
            $route (to) {
                this.rootSlug = to.params.rootCategory;
            }
        }
    }
</script>

<style scoped>

</style>