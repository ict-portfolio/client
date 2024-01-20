<template>
    <div class="min-h-screen p-4">
        <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp" @click="$router.back()">arrow_back</span>
        <ImagesModal @selection="selectImage" v-if="viewModal" @cancel="cancelModal" class="fixed z-50 w-1/2 bg-white shadow-lg top-1/2 left-1/2" style="transform: translate(-50% , -50%);" />
        <form class="p-4 mx-auto shadow-md" @submit.prevent="createProduct">
            <h1 class="text-2xl">Create Product</h1>
            <BaseInput class="w-full" :error="errors.name" type="text" :label="'Name'" v-model="product.name" />
            <div class="w-full mx-auto mt-2 mb-8">
                <label for="description">Description</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="product.description" theme="snow" toolbar="full" contentType="html"></quill-editor>
            </div>
            <BaseInput class="w-full" :error="errors.price" type="number" :label="'Price'" v-model="product.price" />
            <BaseInput class="w-full" :error="errors.discount" type="number" :label="'Discount'" v-model="product.discount" />
            <div class="mb-3">
                <input type="checkbox" v-model="product.instock">
                <label for="instock" class="ml-2">Instock</label>
            </div>
            <div class="flex justify-between mt-2">
                <p v-if="errors.image_id" class="w-full font-semibold text-danger">{{ errors.image_id[0] }}</p>
                <p @click="viewModal = true" class="flex items-center px-4 py-2 rounded-full shadow-lg cursor-pointer">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Add Photo
                </p>
                <button class="bg-secondary px-8 shadow text-white py-1.5 rounded-full">Create</button>
            </div>
            <div v-if="previewImage.length" class="flex flex-wrap mt-4">
                <div v-for="image in previewImage" :key="image.id" class="relative w-fit h-fit">
                    <span @click="removeImage(image.id)" class="absolute text-white cursor-pointer top-2 right-4">X</span>
                    <img class="w-32 m-2 rounded-md" :src="image.image" alt="">
                </div>
            </div>
        </form>

    </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import ImagesModal from '@/components/admin/ImagesModal.vue';
import filePath from '@/services/FilePath';
import ApiService from '@/services/ApiService';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

    export default {
        components : {
            BaseInput , ImagesModal , QuillEditor
        },
        data(){
            return {
                viewModal : false,
                previewImage : [],
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
        methods : {
            cancelModal() {
                this.viewModal = false;
            },
            removeImage(id) {
                this.product.images = this.product.images.filter((image) => image != id)
                this.previewImage = this.previewImage.filter((image) => image.id != id)
            },
            selectImage(image) {
                console.log(image.id);
                this.previewImage.push({id : image.id , image : filePath.imagePath(image.image)})
                this.product.images.push(image.id)
                this.cancelModal()
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