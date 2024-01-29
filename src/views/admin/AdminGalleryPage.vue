<template>
    <div class="min-h-screen">
        <div class="flex justify-between p-4">
            <h1 class="text-2xl">Gallery</h1>
            <button @click="focusInput" class="flex items-center p-4 py-2 my-auto text-white rounded-full bg-primary">
                <span class="material-icons-sharp">file_upload</span>Upload Photo
            </button>
            <input @change="uploadImage" id="image" ref="fileInput" type="file" class="hidden">
        </div>
        <div v-if="!images.length" class="flex justify-center mt-16">
            <span class="text-xl text-danger">Loading . . .</span>
        </div>
        <div v-if="images.length" :class="selectedImage.image ? 'blur-sm' : ''" class="p-4 image-gallery">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <!-- Loop through images -->
                <div v-for="image in images" :key="image.id" class="grid">
                    <img  loading="lazy" @click="selectedImage = image"  :src="image.url" class="w-full h-auto cursor-pointer" />
                </div>
            </div>
            <div class="flex justify-center w-full m-8">
                <span v-if="page < last_page" @click="paginateNext" style="font-size: 36px;color: cornflowerblue;cursor: pointer;" class="material-icons-sharp animate-bounce">arrow_drop_down_circle</span>
            </div>
        </div>

        <div class="fixed z-50 w-1/2 top-1/2 left-1/2" style="transform: translate(-50% , -50%);" v-if="selectedImage.url">
            <span @click="selectedImage = {}" style="position: absolute;right: 5px;top: 5px;color: white;user-select: none;cursor: pointer;font-size: 32px;" class="material-icons-sharp">cancel</span>
            <img class="w-full select-none" :src="selectedImage.url" alt="">
            <p v-if="message" class="absolute px-4 text-white py-0.5 bottom-2 left-2 bg-tertiary rounded-md text-sm">{{ message }}</p>
            <div class="absolute bottom-2 right-2">
                <button class="flex items-center px-2 py-2 rounded-full">
                    <span title="Remove from slider" v-if="selectedImage.slider && selectedImage.slider.status" @click="removeSlider(selectedImage.slider.id)" style="color: white;" class="material-icons-sharp">cancel_presentation</span>
                    <span title="Set as slider" v-else @click="setAsSlider(selectedImage.id)" style="color: white;" class="material-icons-sharp">view_carousel</span>
                </button>
                <button class="flex items-center px-2 py-2 rounded-full" title="Remove image">
                    <span style="color: white;" class="material-icons-sharp">delete</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath'
    export default {
        data() {
            return {
                selectedImage : {},
                page : 1,
                last_page : 1,
                images : [],
                filePath : filePath,
                message : ''
            }
        },

        methods : {
            paginateNext(){
                this.page++;
                this.getImages();
            },
            getImages () {
                ApiService.get(`admin/images?page=${this.page}`).then((res) => {
                    console.log(res.data.data.data);
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
                    formData.set('url' , e.target.files[0])
                    ApiService.post('admin/images' , formData).then((res) => {
                        this.images.push(res.data.data)
                    }).catch((res) => {
                        console.log(res);
                    })
                }
            },
            setAsSlider(id) {
                let obj = {};
                obj.image_id = id;
                obj.status = true;
                ApiService.post('admin/sliders' , obj).then((res) => {
                    console.log(res);
                    this.uiUpdates(res.data.data , res.data.message)
                }).catch((res) => {
                    console.log(res);
                })
            },
            removeSlider(id) {
                ApiService.delete(`admin/sliders/${id}`).then((res) => {
                    console.log(res);
                    this.uiUpdates(null , res.data.message)
                    setTimeout(() => {
                        this.message = '';
                    } , 2500)
                }).catch((res) => {
                    console.log(res);
                })
            },
            uiUpdates(slider , msg){
                this.message = msg
                    this.images = this.images.map((img) => {
                        if (slider) {
                            if (slider.image_id == img.id) {
                                img.slider = slider
                            }
                        } else {
                            img.slider = null;
                        }
                        return img;
                    })
                    setTimeout(() => {
                        this.message = '';
                    } , 2500)
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