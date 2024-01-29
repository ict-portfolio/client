<template>
    <div class="text-gray-1">
        <form class="mx-auto" @submit.prevent="createRootCategory">
            <h1 class="text-2xl">Create Root Category</h1>
            <img v-if="previewImage" class="w-[32px] mx-auto my-6 rounded-md" :src="previewImage" alt="">
            <BaseInput class="w-full" :error="errors.name" type="text" :label="'Name'" v-model="name" />
            <div class="mb-2">
                <label for="type" class="block w-full mb-1">Category Type</label>
                <select v-model="type" class="w-full p-1 text-gray-700 bg-white border rounded appearance-none border-primary focus:outline-none focus:ring-0" name="type" id="type">
                    <option disabled selected>Choose a category type</option>
                    <option value="solutions">Solutions</option>
                    <option value="products">Products</option>
                    <option value="resources">Resources</option>
                </select>
                <p v-if="errors.icon" class="w-full text-danger">{{ errors.type[0] }}</p>
            </div>
            <div class="mb-2">
                <label for="icon" class="block w-full mb-1">Icon</label>
                <input @change="selectIcon" class="file:border-primary file:border file:bg-white" name="icon" id="icon" type="file">
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
                previewImage : '',
                name : '',
                type : '',
                formData : new FormData(),
                errors : {}
            }
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
                this.formData.set('type' , this.type)
                ApiService.post('admin/root-categories' , this.formData).then((res) => {
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