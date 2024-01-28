<template>
    <div class="relative min-h-screen bg-white">
        <span style="cursor: pointer;margin: 10px;" class="material-icons-sharp" @click="$router.back()">arrow_back</span>
        <h1 class="text-2xl py-2 px-4">Create Service</h1>
        <ImagesModal @selection="selectImage" v-if="viewModal" @cancel="cancelModal"
            class="fixed z-50 w-1/2 bg-white shadow-lg top-1/2 left-1/2" style="transform: translate(-50% , -50%);" />
        <form @submit.prevent="createService" class="pb-6 flex flex-wrap justify-between px-3">
            <div class="w-full">
                <img class="w-1/2 mx-auto rounded" v-if="previewImage" :src="previewImage" alt="">
            </div>
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
            <BaseInput class="h-fit" :error="errors.name" type="text" :label="'Slug'" v-model="service.slug" />
            <BaseInput class="h-fit mr-5" :error="errors.name" type="text" :label="'Image_Description'"
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
                <p @click="viewModal = true"
                    class="flex items-center px-6 py-2 rounded-full shadow-lg cursor-pointer w-fit">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Choose Photo
                </p>
                <p v-if="errors.image_id" class="w-full ml-2 font-semibold text-danger">{{ errors.image_id[0] }}</p>
            </div>

            <div class="flex justify-end w-[96%]">
                <button class="bg-secondary px-6 shadow text-white py-1.5 rounded">Create</button>
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
            viewModal: false,
            categories: [],
            errors: {},
            service: {
                name: '',
                slug: '',
                image_id: 1,
                proposal: '',
                terms: '',
                features: '',
                image: [],
                // category_id: null
            },
            previewImage: ''
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
        cancelModal() {
            this.viewModal = false;
        },
        selectImage(image) {
            this.service.image_id = image.id
            this.previewImage = image.url
            this.cancelModal()
        },
        createService() {
            ApiService.post('admin/services', this.service).then(() => {
                this.$emit('reload')
            }).catch((res) => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped></style>