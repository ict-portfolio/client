<template>
    <div>
        <div class="py-8 px-4 mb-12 border border-[#d1d5db] rounded-md">
            <h1 class="text-2xl text-primary">Categories</h1>
            <ul class="mt-6">
                <li class="flex items-center py-1.5  my-2 border-[#d1d5db] border-b" v-for="category in categories" :key="category.id">
                    <span style="color: cornflowerblue;" class="material-icons-outlined">navigate_next</span>
                    <router-link class="w-full hover:text-secondary" to="/">{{ category.name }}</router-link>
                </li>
            </ul>
        </div>
        <div class="py-8 px-2 sm:px-4 mb-12 border border-[#d1d5db] rounded-md">
            <h1 class="text-2xl text-primary">Recent Articles</h1>
            <ul class="my-4">
                <li  v-for="content in contents" :key="content.id" class="p-1 my-4">
                    <router-link class="flex w-full text-dense hover:text-secondary" :to="{name : 'ContentView' , params : {slug : content.slug}}">
                        <img class="w-20 rounded h-fit sm:w-28" v-if="content.image" :src="filePath.imagePath(content.image.image)" alt="">
                        <div class="px-3">
                            <h1 class="sm:text-lg">{{ content.name }}</h1>
                            <p class="my-1 text-sm text-gray-1">{{ content.category.name }}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
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
                categories : [],
                contents : []
            }
        },
        mounted(){
            this.getCategories();
            this.getContents();
        },
        methods : {
            getCategories() {
                ApiService.get('get-categories').then((res) => {
                    console.log(res.data.data);
                    this.categories = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            },
            getContents () {
                ApiService.get('get-contents').then((res) => {
                    this.contents = res.data.data.slice(0 , 3)
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>