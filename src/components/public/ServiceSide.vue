<template>
    <div>
        <div class="py-8 px-2 sm:px-4 mb-12 border border-[#d1d5db] rounded-md">
            <h1 class="text-2xl text-primary">Latest Services</h1>
            <ul class="my-4">
                <li  v-for="service in services" :key="service.id" class="p-1 my-4">
                    <router-link class="flex w-full text-dense hover:text-secondary" to="/routefixtoservicedetail">
                        <img class="w-20 rounded h-fit sm:w-28" v-if="service.image" :src="filePath.imagePath(service.image.image)" alt="">
                            <h1 class="mx-4 sm:text-lg">{{ service.name }}</h1>
                    </router-link>
                </li>
            </ul>
        </div>
        <ul class="py-8 sm:px-4 text-lg mb-12 list-[square] px-2 border border-[#d1d5db] rounded-md">
            <li class="my-2 ml-4">Innovative Solutions</li>
            <li class="my-2 ml-4">Cost Efficiency</li>
            <li class="my-2 ml-4">Security and Compliance</li>
            <li class="my-2 ml-4">Exceptional Customer Service</li>
        </ul>
        <SocialPages class="flex justify-center w-full py-6 rounded bg-secondary" />
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
import SocialPages from './SocialPages.vue';
    export default {
        components : {
            SocialPages
        },
        data() {
            return {
                filePath : filePath,
                services : []
            }
        },
        mounted(){
            this.getServices();
        },
        methods : {
            getServices () {
                ApiService.get('get-limited-services').then((res) => {
                    this.services = res.data.data.slice(0 , 3)
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>