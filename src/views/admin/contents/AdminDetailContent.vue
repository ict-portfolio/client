<template>
    <div>
        <div>
            <img v-if="content.image" class="w-1/2 mx-auto my-4" :src="content.image.url" alt="">
            <div class="px-2">
                <h1 class="text-2xl ">Category</h1>
                <p class="m-4">{{ content?.category?.name }}</p>
            </div>
            <div class="px-2">
                <h1 class="text-2xl ">Status</h1>
                <span class="text-danger m-4" v-if="content?.status == 0">Not Published</span>
                <span v-else class="text-tertiary m-4">Published</span>
            </div>
            <div class="px-2">
                <h1 class="text-2xl ">Description</h1>
                <p class="m-4" v-html="content?.description"></p>
            </div>
            <div class="px-2">
                <h1 class="text-2xl ">Paragraph</h1>
                <p class="m-4" v-html="content?.paragraph"></p>
            </div>
            <div class="flex m-6 justify-end">
                <router-link :to="{ name: 'AdminEditContent', params: { id: content.id } }"
                    class="flex items-center px-3 py-3 mr-4 text-white rounded-full bg-secondary">
                    <span class="material-icons-outlined">edit</span>
                </router-link>
                <button @click="deleteContent" class="flex items-center px-3 py-2 text-white rounded-full bg-danger">
                    <span class="material-icons-outlined">delete</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
export default {
    data() {
        return {
            filePath: filePath,
            slug: this.$route.params.id,
            content: {}
        }
    },
    mounted() {
        this.getcontent()
    },
    methods: {
        getcontent() {
            ApiService.get(`admin/contents/${this.slug}`).then((res) => {
                console.log(res.data.data);
                this.content = res.data.data;
            }).catch((res) => {
                console.log(res);
            })
        },
        deleteContent() {
            ApiService.delete(`admin/contents/${this.content.id}`).then(() => {
                this.$router.push({ name: 'AdminContent' })
            }).catch((res) => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped></style>