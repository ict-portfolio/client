<template>
    <div>
        <div class="w-full pb-12 mb-6 pt-36 breadcamp">
            <h1 class="my-4 text-3xl text-center text-white sm:text-5xl">{{ content.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ContentsPage'}">Contents</router-link>
            </p>
        </div>

        <div class="justify-between md:flex">
            <article class="md:w-[65%] p-2 md:p-4">
                <img v-if="content.image" class="rounded" :src="filePath.imagePath(content.image.image)" alt="">
                <div class="flex justify-center mt-4 text-sm sm:text-base">
                    <span class="mx-2 sm:mx-4">{{ content.created_at }}</span>
                    <router-link to="/" v-if="content.category" class="mx-2 underline sm:mx-4 text-secondary">{{ content.category.name }}</router-link>
                </div>
                <p class="my-6 leading-7 tracking-wider" v-html="content.paragraph"></p>
            </article>

            <ContentSide class="p-2 md:w-1/3 md:p-4" />

        </div>

    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
import ContentSide from '@/components/public/ContentSide.vue';
export default {
    components : {
        ContentSide
    },
    data() {
        return {
            filePath : filePath,
            slug : this.$route.params.slug,
            content : {}
        }
    },
    mounted () {
        this.getcontent()
    },
    methods : {
        getcontent() {
            ApiService.get(`get-contents/${this.slug}`).then((res) => {
                this.content = res.data.data;
            }).catch((res) => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>

</style>