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
        <div class="justify-between md:flex">
            <div class="md:w-[65%] p-2 md:p-4">
                <img v-if="service.image" class="rounded" :src="filePath.imagePath(service.image.image)" alt="">
                <p class="my-8 leading-7 tracking-wider" v-html="service.paragraph"></p>
                <button title="Back" @click="$router.go(-1)" class="px-2 pt-2 pb-0.5 mt-4 text-gray-2 rounded-full border">
                    <span class="material-icons-outlined">keyboard_double_arrow_left</span>
                </button>
                <router-link :to="{name : 'ServicesPage'}" class="px-4 py-1.5 mt-4 mr-4 text-white rounded bg-primary float-right">See More</router-link>
            </div>

            <ServiceSide class="p-2 md:w-1/3 md:p-4" />

        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
import ServiceSide from '@/components/public/ServiceSide.vue';
    export default {
        components : {
            ServiceSide
        },
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