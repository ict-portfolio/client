<template>
    <div class="px-2 py-12 sm:px-12">
        <div class="flex flex-col items-center w-full">
            <h1 class="p-2 text-3xl font-semibold text-center sm:text-5xl text-primary">
                Our Latest Articles
            </h1>
            <p class="p-2 mb-10 text-sm text-center sm:w-1/2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ratione quis eligendi error .Non ratione quis eligendi error.
            </p>
        </div>
        <div v-if="contents.length" class="flex-wrap justify-around sm:flex">
            <div data-aos="zoom-in" :data-aos-delay="index * 100" class="sm:w-[48%] md:w-[30%] pb-2 overflow-hidden bg-white rounded-xl my-8 hover:shadow-lg shadow" v-for="content , index in contents" :key="content.id">
                <router-link :to="{name : 'ContentView' , params : {slug : content.slug}}">
                    <img class="w-full shadow-lg sm:h-[180px] hover:scale-105 transition duration-500 md:h-[240px]" v-if="content.image" :src="filePath.imagePath(content.image.image)" alt="">
                    <div class="flex justify-between px-2 py-3 text-sm">
                        <span class="font-sans">{{ content.created_at }}</span>
                        <span class="text-secondary">{{ content.category.name }}</span>
                    </div>
                    <h1 class="px-2 text-2xl text-dense">{{ content.name }}</h1>
                    <p class="p-2 text-sm" v-html="content.description"></p>
                </router-link>
            </div>
        </div>
        <p v-else class="my-4 text-lg text-center text-danger">" Unable to show articles due to maintenance break! "</p>
        <div v-if="contents.length" class="flex justify-center w-full my-4">
            <router-link class="px-6 py-2 text-white rounded-full animate-bounce bg-secondary" to="/">
                See More
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
        mounted(){
            this.getContents()
        },
        methods : {
            getContents () {
                ApiService.get('get-limited-contents').then((res) => {
                    this.contents = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>