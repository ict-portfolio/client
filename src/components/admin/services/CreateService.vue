<template>
    <div class="relative">
        <ImagesModal @selection="selectImage" v-if="viewModal" @cancel="cancelModal" class="fixed z-50 w-1/2 bg-white shadow-lg top-1/2 left-1/2" style="transform: translate(-50% , -50%);" />
        <form @submit.prevent="createService" class="flex flex-wrap justify-around pb-6">
            <div class="w-full">
                <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp" @click="$emit('reload')">arrow_back</span>
            </div>
            <div class="w-full">
                <img class="w-1/2 mx-auto rounded" v-if="previewImage" :src="previewImage" alt="">
            </div>
            <BaseInput class="h-fit"  :error="errors.name" type="text" :label="'Name'" v-model="service.name" />

            <div class="w-[48%] my-6">
                <p @click="viewModal = true" class="flex items-center px-6 py-2 rounded-full shadow-lg cursor-pointer w-fit">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Choose Photo
                </p>
                <p v-if="errors.image_id" class="w-full ml-2 font-semibold text-danger">{{ errors.image_id[0] }}</p>
            </div>

            <div class="w-[98%] mx-auto mb-32">
                <label for="description">Paragraph</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="service.paragraph" theme="snow" toolbar="full" contentType="html"></quill-editor>
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
import ImagesModal from '../ImagesModal.vue';
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';

    export default {
        components : {
                BaseInput , QuillEditor , ImagesModal
        },
        data() {
            return {
                viewModal : false,
                errors : {},
                service : {
                    name : '',
                    image_id : 1,
                    paragraph : '',
                },
                previewImage : ''
            }
        },
        methods : {
            cancelModal() {
                this.viewModal = false;
            },
            selectImage(image) {
                this.service.image_id = image.id
                this.previewImage = filePath.imagePath(image.image)
                this.cancelModal()
            },
            createService () {
                ApiService.post('admin/services' , this.service).then(() => {
                    this.$emit('reload')
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>