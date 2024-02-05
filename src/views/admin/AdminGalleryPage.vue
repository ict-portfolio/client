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
            <div class="flex flex-wrap">
                <!-- Loop through images -->
                <div v-for="image in images" :key="image.id" class="w-1/3 h-[25vh] border-2 border-white shadow md:w-1/5 overflow-hidden">
                    <img  loading="lazy" @click="selectImage(image)"  :src="image.url" class="object-cover w-full h-full transition-all duration-200 cursor-pointer hover:scale-105" />
                </div>
            </div>
            <div class="flex justify-center w-full m-8">
                <span v-if="page < last_page" @click="paginateNext" style="font-size: 36px;color: cornflowerblue;cursor: pointer;" class="material-icons-sharp animate-bounce">arrow_drop_down_circle</span>
            </div>
        </div>

        <TransitionRoot appear :show="showImage" as="template">
        <Dialog as="div" @close="showImage = false" class="relative z-50">
            <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            >
            <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
            <div
                class="flex items-center justify-center min-h-full p-4 text-center"
            >
                <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
                >
                <DialogPanel
                    class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md shadow-xl"
                >
                    <img class="mx-auto w-fit max-h-[500px] rounded" :src="selectedImage.url" alt="">
                    <p v-if="message" class="py-0.5 text-green font-semibold rounded-md text-sm">{{ message }}</p>
                    <div class="flex items-center mt-4">
                        <button v-if="selectedImage.slider && selectedImage.slider.status" @click="removeSlider(selectedImage.slider.id)" class="flex items-center px-2 py-2 text-white rounded outline-none bg-danger focus:ring-0">
                            <span title="Remove from slider" class="material-icons-sharp">cancel_presentation</span>
                            <span class="ml-2">Remove from Silder</span>
                        </button>
                        <button v-else @click="setAsSlider(selectedImage.id)" class="flex items-center px-2 py-2 text-white rounded outline-none bg-green focus:ring-0">
                            <span class="material-icons-sharp">view_carousel</span>
                            <span class="ml-2">Add to Silder</span>
                        </button>
                        <button @click="deleteImage(selectedImage.id)" class="flex items-center px-2 py-2 ml-3 text-white rounded outline-none bg-danger focus:ring-0" title="Remove image">
                            <span class="material-icons-sharp">delete</span>
                            <span class="ml-2">Delete Photo</span>
                        </button>
                    </div>
                </DialogPanel>
                </TransitionChild>
            </div>
            </div>
        </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
    export default {
        components: {
            TransitionRoot,
            TransitionChild,
            Dialog,
            DialogPanel,
        },
        data() {
            return {
                selectedImage : {},
                showImage : false,
                page : 1,
                last_page : 1,
                images : [],
                message : 'set as slider'
            }
        },

        methods : {
            paginateNext(){
                this.page++;
                this.getImages();
            },
            selectImage (image) {
                this.selectedImage = image;
                this.showImage = true;
            },
            getImages () {
                ApiService.get(`admin/images?page=${this.page}`).then((res) => {
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
                    this.uiUpdates(res.data.data , res.data.message)
                }).catch((res) => {
                    console.log(res);
                })
            },
            removeSlider(id) {
                ApiService.delete(`admin/sliders/${id}`).then((res) => {
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
            },
            deleteImage(id) {
                ApiService.delete(`admin/images/${id}`).then(() => {
                    this.showImage = false;
                    this.selectedImage = {};
                    this.images = this.images.filter((img) => img.id != id);
                }).catch((res) => {
                    console.log(res);
                })
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