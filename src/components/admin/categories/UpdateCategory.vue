<template>
    <div class="relative p-4">
        <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp" @click="$emit('reload')">arrow_back</span>
        <ImagesModal @selection="selectImage" v-if="viewModal" @cancel="cancelModal" class="fixed z-50 w-1/2 bg-white shadow-lg top-1/2 left-1/2" style="transform: translate(-50% , -50%);" />
        <form class="w-1/2 p-4 mx-auto shadow-md" @submit.prevent="updateCategory">
            <div class="flex justify-between">
                <h1 class="text-2xl">Update Category</h1>
            </div>
            <img v-if="previewImage" class="w-2/3 mx-auto my-6 rounded-md" :src="previewImage" alt="">
            <BaseInput class="w-full" :error="errors.name" type="text" :label="'Name'" v-model="category.name" />
            <div class="flex flex-wrap justify-between">
                <p v-if="errors.image_id" class="w-full font-semibold text-danger">{{ errors.image_id[0] }}</p>
                <p @click="viewModal = true" class="flex items-center px-4 py-2 rounded-full shadow-lg cursor-pointer">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Choose Photo
                </p>
                <button class="bg-secondary px-5 shadow text-white py-1.5 rounded-full">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import ImagesModal from '../ImagesModal.vue';
import filePath from '@/services/FilePath';
import ApiService from '@/services/ApiService';
    export default {
        components : {
            BaseInput , ImagesModal
        },
        props : ["id"],
        data(){
            return {
                viewModal : false,
                previewImage : '',
                category : {},
                errors : {}
            }
        },
        methods : {
            cancelModal() {
                this.viewModal = false;
            },
            selectImage(image) {
                this.previewImage = filePath.imagePath(image.image)
                this.category.image_id = image.id
                this.cancelModal()
            },
            updateCategory(){
                ApiService.patch(`admin/categories/${this.$props.id}` , this.category).then(() => {
                    this.$emit('reload')
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            ApiService.get(`admin/categories/${this.$props.id}`).then((res) => {
                this.category = res.data.data
                this.previewImage = filePath.imagePath(this.category.image.image)
            }).catch((res) => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>

</style>