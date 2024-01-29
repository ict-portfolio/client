<template>
    <div class="relative min-h-screen bg-white">
        <span style="cursor: pointer;margin: 10px;" class="material-icons-sharp" @click="$router.back()">arrow_back</span>
        <h1 class="px-4 py-2 text-2xl">Create Service</h1>
        <ImagesModal @closeModal="isOpen = false" @selectImage="selectImage" :isOpen="isOpen" />
        <form @submit.prevent="createService" class="flex flex-wrap justify-between px-3 pb-6">
            <BaseInput class="h-fit" :error="errors.name" type="text" :label="'Name'" v-model="service.name" />
            <div class="w-[48%] mx-auto">
                <label for="icon" class="block w-full">Category</label>
                <select v-model="service.category_id"
                    class="w-full rounded px-2 py-1.5 text-gray-700 bg-white border appearance-none border-primary focus:outline-none focus:ring-0"
                    name="root_category_id" id="">
                    <option disabled selected>Select Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                    </option>
                </select>
                <p v-if="errors.category_id" class="w-full text-danger">{{ errors.category_id[0] }}</p>
            </div>
            <BaseInput class="mr-5 h-fit" :error="errors.name" type="text" :label="'Image Description'"
                v-model="service.image_description" />
            <div class="w-[98%] mx-auto mb-32">
                <label for="description">Proposal</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="service.proposal" theme="snow"
                    toolbar="full" contentType="html"></quill-editor>
            </div>
            <div class="w-[98%] mx-auto mb-32">
                <label for="description">Terms</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="service.terms" theme="snow"
                    toolbar="full" contentType="html"></quill-editor>
            </div>
            <div class="w-[98%] mx-auto mb-32">
                <label for="description">Features</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="service.features" theme="snow"
                    toolbar="full" contentType="html"></quill-editor>
            </div>

            <div class="w-[48%] my-6">
                <p @click="isOpen = true"
                    class="flex items-center px-6 py-2 rounded-full shadow-lg cursor-pointer w-fit">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Choose Photo
                </p>
                <p v-if="errors.image_id" class="w-full ml-2 font-semibold text-danger">{{ errors.image_id[0] }}</p>
            </div>
            <div class="flex justify-end w-[96%]">
                <button class="bg-secondary px-6 shadow text-white py-1.5 rounded">Create</button>
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
import BaseInput from '@/components/base/BaseInput.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImagesModal from '../../../components/admin/ImagesModal.vue';
import ApiService from '@/services/ApiService';

export default {
    components: {
        BaseInput, QuillEditor, ImagesModal
    },
    data() {
        return {
            isOpen: false,
            categories: [],
            errors: {},
            service: {
                name: '',
                image_description : '',
                proposal: '',
                terms: '',
                features: '',
                images: [],
                category_id: null
            },
            selectedImages : []
        }
    },
    mounted() {
        ApiService.get('admin/categories').then((res) => {
            this.categories = res.data.data
        }).catch((res) => {
            console.log(res);
        })
    },
    methods: {
        selectImage(image) {
            this.service.images.push(image.id)
            this.selectedImages.push(image)
        },
        popImage(id) {
            this.service.images = this.service.images.filter((image) => image != id)
            this.selectedImages = this.selectedImages.filter((image) => image.id != id)
        },
        createService() {
            ApiService.post('admin/services', this.service).then(() => {
                this.$router.push({name : 'AdminServicePage'})
            }).catch((res) => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped></style>