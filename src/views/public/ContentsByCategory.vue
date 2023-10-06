<template>
    <div>
        <div class="w-full pb-12 mb-6 pt-36 breadcamp">
            <h1 v-if="category" class="my-4 text-3xl text-center text-white sm:text-5xl">{{ category.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ContentsPage'}">Contents</router-link>
            </p>
        </div>
        <div  class="flex-wrap justify-around sm:flex" v-if="contents.length">
            <div  data-aos="zoom-in" :data-aos-delay="index * 100" class="sm:w-[48%] md:w-[30%] pb-2 overflow-hidden bg-white rounded-xl my-8 hover:shadow-lg shadow" v-for="content ,index in contents" :key="content.id">
                <router-link :to="{name : 'ContentView' , params : {slug : content.slug}}">
                    <img class="w-full shadow-lg sm:h-[180px] hover:scale-105 transition duration-500 md:h-[240px]" v-if="content.image" :src="filePath.imagePath(content.image.image)" alt="">
                    <div class="flex justify-between px-2 py-3 text-sm">
                        <span>{{ content.created_at }}</span>
                        <span class="text-secondary">{{ category.name }}</span>
                    </div>
                    <h1 class="px-2 text-2xl text-dense">{{ content.name }}</h1>
                    <p class="p-2 text-sm" v-html="content.description"></p>
                </router-link>
            </div>
        </div>
        <div v-else class="flex items-center p-4 mx-auto my-12 shadow-lg w-fit">
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84308 20.1979C9.8718 21.3993 10.8862 22 12 22C13.1138 22 14.1282 21.3993 16.1569 20.1979L16.8431 19.7915C18.8718 18.5901 19.8862 17.9894 20.4431 17C21 16.0106 21 14.8092 21 12.4063M20.8147 8C20.7326 7.62759 20.6141 7.3038 20.4431 7C19.8862 6.01057 18.8718 5.40987 16.8431 4.20846L16.1569 3.80211C14.1282 2.6007 13.1138 2 12 2C10.8862 2 9.8718 2.6007 7.84308 3.80211L7.15692 4.20846C5.1282 5.40987 4.11384 6.01057 3.55692 7C3 7.98943 3 9.19084 3 11.5937V12.4063C3 14.8092 3 16.0106 3.55692 17C3.78326 17.4021 4.08516 17.74 4.5 18.0802" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
            </svg>
            <p class="m-4 text-lg text-center text-danger">
                " Unable to show contents due to maintenance break! "
            </p>
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
                category : {},
                filePath : filePath,
                slug : this.$route.params.slug
            }
        },
        mounted() {
            this.getContents();
        },
        methods : {
            getContents() {
                ApiService.get(`get-contents-by-category/${this.slug}`).then((res) => {
                    this.contents = res.data.data.contents;
                    console.log(res.data.data);
                    this.category = res.data.data.category
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>