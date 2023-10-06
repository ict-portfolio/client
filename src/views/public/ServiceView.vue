<template>
    <div>
        <div class="w-full pb-12 mb-6 pt-36 breadcamp">
            <h1 class="my-4 text-3xl text-center text-white sm:text-5xl">{{ service.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 12px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ServicesPage'}">Services</router-link>
            </p>
        </div>
        <div class="md:w-[65%] p-2 md:p-4">
            <img v-if="service.image" class="rounded" :src="filePath.imagePath(service.image.image)" alt="">
            <p class="my-8 leading-7 tracking-wider" v-html="service.paragraph"></p>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
    export default {
        data() {
            return {
                filePath : filePath,
                slug : this.$route.params.slug,
                service : {}
            }
        },
        mounted () {
            this.getService()
        },
        methods : {
            getService() {
                ApiService.get(`get-services/${this.slug}`).then((res) => {
                    console.log(res.data.data);
                    this.service = res.data.data;
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>