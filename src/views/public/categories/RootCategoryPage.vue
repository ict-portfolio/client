<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl text-center text-white sm:text-5xl">{{ rootCategory }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ rootCategory }}</span>
            </p>
        </div>
        Root Categories list with sub categories and related fields
    </div>
</template>

<script>
    export default {
        data () {
            return {
                rootCategory : this.$route.params.rootCategory
            }
        }
    }
</script>

<style scoped>

</style>