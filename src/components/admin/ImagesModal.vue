<template>
        <div v-if="images.length"  class="p-4 image-gallery">
            <div class="flex justify-end py-4">
                <span @click="$emit('cancel')" style="cursor: pointer; font-size: 32px;" class="material-icons-sharp">cancel</span>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="image in images" :key="image.id" class="grid">
                    <img  loading="lazy" @click="selectImage(image)"  :src="filePath.imagePath(image.image)" class="w-full h-auto cursor-pointer" />
                </div>
            </div>
            <div class="flex justify-center w-full m-8">
                <span v-if="page < last_page" @click="paginateNext" style="font-size: 36px;color: cornflowerblue;cursor: pointer;" class="material-icons-sharp animate-bounce">arrow_drop_down_circle</span>
            </div>
        </div>

</template>

<script>
import filePath from '@/services/FilePath'
import ApiService from '@/services/ApiService';
    export default {
        data() {
            return {
                images : [],
                page : 1,
                last_page : 1,
                filePath : filePath
            }
        },
        methods : {
            getImages () {
                ApiService.get(`admin/images?page=${this.page}`).then((res) => {
                    this.images.push(...res.data.data.data);
                    this.last_page = res.data.data.last_page;
                }).catch((res) => {
                    console.log(res);
                });
            },
            paginateNext(){
                this.page++;
                this.getImages();
            },
            selectImage(image) {
                this.$emit('selection' , image)
            }
        },
        mounted(){
            this.getImages();
        }
    }
</script>

<style scoped>

</style>