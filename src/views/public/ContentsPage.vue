<template>
    <div  class="flex-wrap justify-around sm:flex">
        <div class="flex justify-center w-full pb-12 mb-6 pt-36 breadcamp">
            <p class="flex items-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>Contents</span>
            </p>
        </div>
        <div  data-aos="zoom-in" :data-aos-delay="index * 100" class="sm:w-[48%] md:w-[30%] pb-2 overflow-hidden bg-white rounded-xl my-8 hover:shadow-lg shadow" v-for="content ,index in contents" :key="content.id">
            <router-link :to="{name : 'ContentView' , params : {slug : content.slug}}">
                <img class="w-full shadow-lg sm:h-[180px] hover:scale-105 transition duration-500 md:h-[240px]" v-if="content.image" :src="filePath.imagePath(content.image.image)" alt="">
                <div class="flex justify-between px-2 py-3 text-sm">
                    <span>{{ content.created_at }}</span>
                    <span class="text-secondary">{{ content.category.name }}</span>
                </div>
                <h1 class="px-2 text-2xl text-dense">{{ content.name }}</h1>
                <p class="p-2 text-sm" v-html="content.description"></p>
            </router-link>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';

    export default {
        data() {
            return {
                contents : [],
                filePath : filePath
            }
        },
        mounted() {
            this.getContents();
        },
        methods : {
            getContents() {
                ApiService.get('get-contents').then((res) => {
                    this.contents = res.data.data;
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>