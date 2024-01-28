<template>
    <div class="min-h-screen p-4">
        <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp"
            @click="$router.back()">arrow_back</span>
        <ImagesModal @selection="selectImage" v-if="viewModal" @cancel="cancelModal"
            class="fixed z-50 w-1/2 bg-white shadow-lg top-1/2 left-1/2" style="transform: translate(-50% , -50%);" />
        <form class="p-4 mx-auto shadow-md" @submit.prevent="updateProduct">
            <h1 class="text-2xl">Edit Product</h1>
            <BaseInput class="w-full" :error="errors.name" type="text" :label="'Name'" v-model="product.name" />
            <div class="w-full mx-auto mt-2 mb-8">
                <label for="icon" class="block w-full mb-1">Product</label>
                <select v-model="product.category_id"
                    class="w-full text-gray-700 bg-white appearance-none focus:outline-none select select-primary focus:ring-0"
                    name="id" id="">
                    <option disabled selected>Select Category</option>
                    <!-- <option>{{ categories }}</option> -->
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                    </option>
                </select>
                <p v-if="errors.categories" class="w-full text-danger">{{ errors.categories }}</p>
            </div>
            <div class="w-full mx-auto mt-2 mb-8">
                <label for="description">Description</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="product.description" theme="snow"
                    toolbar="full" contentType="html"></quill-editor>
            </div>
            <BaseInput class="w-full" :error="errors.price" type="number" :label="'Price'" v-model="product.price" />
            <BaseInput class="w-full" :error="errors.discount" type="number" :label="'Discount'"
                v-model="product.discount" />
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
                <button class="bg-secondary px-8 shadow text-white py-1.5 rounded-full">Edit</button>
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
    components: {
        BaseInput, ImagesModal, QuillEditor
    },
    data() {
        return {
            viewModal: false,
            previewImage: [],
            props: ["id"],
            product: {
                name: '',
                category_id: null,
                description: '',
                price: null,
                discount: null,
                instock: true,
                images: []
            },
            categories: [],
            errors: {}
        }
    },
    methods: {
        cancelModal() {
            this.viewModal = false;
        },
        removeImage(id) {
            this.product.images = this.product.images.filter((image) => image != id)
            this.previewImage = this.previewImage.filter((image) => image.id != id)
        },
        selectImage(image) {
            this.service.image_id = image.id
            this.previewImage = filePath.imagePath(image.image)
            this.cancelModal()
        },
        updateProduct() {
            ApiService.patch(`admin/products/${this.$props.id}`, this.product).then(() => {
                this.$emit('reload')
            }).catch((res) => {
                console.log(res);
            })
        },
        getCategory() {
            ApiService.get('admin/categories').then((res) => {
                this.categories = res.data.data
                console.log(res.data.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.getCategory()
        ApiService.get(`admin/products/${this.$route.params.id}`).then((res) => {
            this.product = res.data.data
        }).catch((err) => {
            console.log(err);
        })
    }
}

</script>

<style scoped></style>