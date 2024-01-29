<template>
    <div class="min-h-screen p-4">
        <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp" @click="$router.back()">arrow_back</span>
        <ImagesModal @closeModal="isOpen = false" @selectImage="selectImage" :isOpen="isOpen" />
        <form class="flex flex-wrap justify-around p-4 mx-auto" @submit.prevent="createProduct">
            <h1 class="w-full text-2xl">Create Product</h1>
            <BaseInput class="h-fit" :error="errors.name" type="text" :label="'Name'" v-model="product.name" />
            <div class="w-[48%]">
                <label for="icon" class="block w-full">Category</label>
                <select v-model="product.category_id" class="w-full py-1.5 px-2 text-gray-700 bg-white border rounded appearance-none focus:outline-none border-primary focus:ring-0" name="root_category_id" id="">
                    <option disabled selected>Select Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
                <p v-if="errors.category_id" class="w-full text-danger">{{ errors.category_id[0] }}</p>
            </div>
            <BaseInput class="h-fit" :error="errors.price" type="text" :label="'Price'" v-model="product.price" />
            <BaseInput class="h-fit" :error="errors.discount" type="text" :label="'Discount'" v-model="product.discount" />
            <div class="w-full px-2 my-5">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="product.instock" class="sr-only peer" checked>
                    <div class="w-11 h-6 bg-gray-2 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-2 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    <span class="font-medium text-gray-900 ms-3">Product instock</span>
                </label>
            </div>
            <div class="w-full px-2 mt-2 mb-28">
                <label for="description">Description</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="product.description" theme="snow" toolbar="full" contentType="html"></quill-editor>
            </div>
            <div class="flex justify-between w-full px-2 mt-2">
                <p v-if="errors.image_id" class="w-full font-semibold text-danger">{{ errors.image_id[0] }}</p>
                <p @click="isOpen = true"
                    class="flex items-center px-6 py-2 rounded-full shadow-lg cursor-pointer w-fit">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Add Photo
                </p>
                <button class="bg-secondary px-8 shadow text-white py-1.5 rounded">Create</button>
            </div>
            <div class="flex flex-wrap w-full my-4">
                <div class="w-[180px] rounded-md relative h-[120px] shadow m-2 p-2 border border-[#b6b4b4] overflow-hidden" v-for="image in selectedImages" :key="image.id" >
                    <span @click="popImage(image.id)" style="cursor: pointer;position: absolute;top: 0px;right: 0px;background-color: white;border-radius: 50%;" class="material-icons-outlined">close</span>
                    <img :src="image.url" class="rounded-md" alt="">
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import ImagesModal from '@/components/admin/ImagesModal.vue';
import ApiService from '@/services/ApiService';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

    export default {
        components : {
            BaseInput , ImagesModal , QuillEditor
        },
        data(){
            return {
                isOpen : false,
                selectedImages : [],
                categories : [],
                product : {
                    name : '',
                    category_id : null,
                    description : '',
                    price : null,
                    discount : null,
                    instock : true,
                    images : []
                },
                errors : {}
            }
        },
        mounted () {
            ApiService.get('admin/categories').then((res) => {
                this.categories = res.data.data
            }).catch((res) => {
                console.log(res);
            })
        },
        methods : {
            selectImage(image) {
                this.product.images.push(image.id)
                this.selectedImages.push(image)
            },
            popImage(id) {
                this.product.images = this.product.images.filter((image) => image != id)
                this.selectedImages = this.selectedImages.filter((image) => image.id != id)
            },
            createProduct(){
                console.log(this.product);
                ApiService.post('admin/products' , this.product).then(() => {
                    this.$router.push({name : 'AdminProducts'})
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }

</script>

<style scoped></style>