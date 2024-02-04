<template>
    <div class="relative min-h-screen bg-white">
        <ImagesModal @closeModal="isOpen = false" @selectImage="selectImage" :isOpen="isOpen" />
        <form @submit.prevent="createContent" class="flex flex-wrap justify-around pb-6">
            <div class="w-full">
                <router-link :to="{name : 'AdminContents'}" style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp">arrow_back</router-link>
            </div>
            <div class="w-full">
                <img class="w-1/2 mx-auto rounded" v-if="selectedImage" :src="selectedImage" alt="">
            </div>
            <BaseInput class="h-fit"  :error="errors.name" type="text" :label="'Name'" v-model="content.name" />

            <div class="w-[48%] my-6">
                <p @click="isOpen = true" class="flex items-center px-6 py-2 rounded-full shadow-lg cursor-pointer w-fit">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Choose Photo
                </p>
                <p v-if="errors.image_id" class="w-full ml-2 font-semibold text-danger">{{ errors.image_id[0] }}</p>
            </div>

            <select v-model="content.category_id" class="w-[48%] appearance-none px-2 my-6 bg-transparent border text-[14px] rounded-md outline-none border-primary">
                <option disabled selected>Choose a category</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
            </select>

            <select v-model="content.status" class="w-[48%] appearance-none p-2 my-6 bg-transparent border text-[14px] rounded-md outline-none border-primary">
                <option disabled selected>Status</option>
                <option :value="Boolean(true)">Publish</option>
                <option :value="Boolean(false)">Don't publish</option>
            </select>

            <div class="w-[98%] mb-32 mt-2 mx-auto">
                <label for="description">Description</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="content.description" theme="snow" toolbar="full" contentType="html"></quill-editor>
            </div>

            <div class="w-[98%] mx-auto mb-32">
                <label for="description">Paragraph</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="content.paragraph" theme="snow" toolbar="full" contentType="html"></quill-editor>
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
import ImagesModal from '@/components/admin/ImagesModal.vue';
import ApiService from '@/services/ApiService';
    export default {
        components : {
                BaseInput , QuillEditor , ImagesModal
        },
        data() {
            return {
                isOpen : false,
                selectedImage : '',
                errors : {},
                categories : [],
                content : {
                    name : '',
                    category_id : 1,
                    image_id : 1,
                    description : '',
                    paragraph : '',
                    status : true
                },
            }
        },
        methods : {
            selectImage(image) {
                this.content.image_id = image.id;
                this.selectedImage = image.url;
                this.isOpen = false;
            },
            popImage(id) {
                console.log(id);
            },
            createContent () {
                ApiService.post('admin/contents' , this.content).then(() => {
                    this.$router.push({name : 'AdminContents'})
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted() {
            ApiService.get('categories-by-type/resources').then((res) => {
                this.categories = res.data.data
            }).catch((res) => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>

</style>