<template>
    <div>
        <div class="flex justify-between p-4">
            <h1 class="text-2xl">Gallery</h1>
            <button @click="focusInput" class="flex items-center p-4 py-2 my-auto text-white rounded-full bg-primary">
                <span class="material-icons-sharp">file_upload</span>Upload Photo
            </button>
            <input @change="uploadImage" id="image" ref="fileInput" type="file" class="hidden">
        </div>
        <div v-if="images.length" :class="selectedImage.image ? 'blur-sm' : ''" class="p-4 image-gallery">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <!-- Loop through images -->
                <div v-for="image in images" :key="image.id" class="grid">
                    <img  loading="lazy" @click="selectedImage = image"  :src="filePath.imagePath(image.image)" class="w-full h-auto cursor-pointer" />
                </div>
            </div>
            <div class="flex justify-center w-full m-8">
                <span v-if="page < last_page" @click="paginateNext" style="font-size: 36px;color: cornflowerblue;cursor: pointer;" class="material-icons-sharp animate-bounce">arrow_drop_down_circle</span>
            </div>
        </div>

        <div class="fixed w-1/2 top-1/2 left-1/2" style="transform: translate(-50% , -50%);" v-if="selectedImage.image">
            <span  style="position: absolute;right: 5px;top: 5px;color: white;user-select: none;cursor: pointer;font-size: 32px;" class="material-icons-sharp">cancel</span>
            <img class="w-full select-none" :src="filePath.imagePath(selectedImage.image)" alt="">
            <div class="absolute bottom-2 right-2">
                <button class="flex items-center px-2 py-2 mb-2 rounded-full" title="Set as slider">
                    <span style="color: white;" class="material-icons-sharp">view_carousel</span>
                </button>
                <button class="flex items-center px-2 py-2 rounded-full" title="Remove image">
                    <span style="color: white;" class="material-icons-sharp">delete</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import filePath from '@/services/FilePath'
    export default {
        data() {
            return {
                selectedImage : {},
                page : 1,
                last_page : 1,
                images : [],
                filePath : filePath
            }
        },

        methods : {
            paginateNext(){
                this.page++;
                this.getImages();
            },
            getImages () {
                axios.get(`admin/images?page=${this.page}`).then((res) => {
                    this.images.push(...res.data.data.data);
                    this.last_page = res.data.data.last_page;
                }).catch((res) => {
                    console.log(res);
                })
            },
            focusInput() {
                this.$refs.fileInput.click()
            },
            uploadImage(e){
                if (e.target.files.length) {
                    let formData = new FormData();
                    formData.set('image' , e.target.files[0])
                    axios.post('admin/images' , formData).then((res) => {
                        this.images.push(res.data.data)
                    }).catch((res) => {
                        console.log(res);
                    })
                }
            }
        },

        mounted(){
            this.page = 1;
            this.getImages()
        }
    }
</script>

<style scoped>
  .grid {
    grid-auto-rows: auto;
  }
</style>