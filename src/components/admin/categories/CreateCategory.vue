<template>
    <div class="text-gray-1">
        <form class="mx-auto" @submit.prevent="createRootCategory">
            <h1 class="text-2xl">Create Category</h1>
            <img v-if="previewImage" class="w-[32px] mx-auto my-6 rounded-md" :src="previewImage" alt="">
            <BaseInput class="w-full" :error="errors.name" type="text" :label="'Name'" v-model="name" />
            <div>
                <label for="icon" class="block w-full mb-1">Root Category</label>
                <select v-model="rootCategoryId" class="w-full p-1 mb-3 text-gray-700 bg-white border rounded appearance-none focus:outline-none border-primary focus:ring-0" name="root_category_id" id="">
                    <option disabled selected>Select Root Category</option>
                    <option v-for="root in rootCategories" :key="root.id" :value="root.id">{{ root.name }}</option>
                </select>
                <p v-if="errors.root_category_id" class="w-full text-danger">{{ errors.root_category_id[0] }}</p>
            </div>
            <div class="mb-2">
                <label for="icon" class="block w-full mb-1 text-primary">Icon</label>
                <input @change="selectIcon" name="icon" id="icon" type="file">
                <p v-if="errors.icon" class="w-full text-danger">{{ errors.icon[0] }}</p>
            </div>
            <div class="flex justify-end">
                <button class="text-white bg-secondary px-4 py-1.5 rounded">Create</button>
            </div>   
        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue'
import ApiService from '@/services/ApiService';
    export default {
        components : {
            BaseInput
        },
        data(){
            return {
                rootCategories : [],
                previewImage : '',
                name : '',
                rootCategoryId : null,
                formData : new FormData(),
                errors : {}
            }
        },
        mounted () {
            ApiService.get('admin/root-categories').then((res) => {
                this.rootCategories = res.data.data
            }).catch((res) => {
                console.log(res);
            })
        },
        methods : {
            cancelModal() {
                this.viewModal = false;
            },
            selectIcon(e) {
                let file = e.target.files[0];
                this.previewImage = URL.createObjectURL(file);
                this.formData.set('icon' , file);
            },
            createRootCategory(){
                this.formData.set('name' , this.name)
                this.formData.set('root_category_id' , this.rootCategoryId)
                ApiService.post('admin/categories' , this.formData).then((res) => {
                    console.log(res);
                    this.$emit('reload')
                }).catch((res) => {
                    console.log(res);
                    this.errors = res?.response?.data?.errors
                    setTimeout(() => {
                        this.errors = {}
                    } , 5000) 
                })
            }
        }
    }

</script>

<style scoped>


</style>