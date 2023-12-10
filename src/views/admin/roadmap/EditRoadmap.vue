<template>
    <div class="h-screen">
        <h1 class="w-full p-4 text-2xl">Roadmap</h1>
        <div class="w-full px-3">
                <span @click="$router.go(-1)" style="cursor: pointer;" class="material-icons-sharp">arrow_back</span>
        </div>
        <form @submit.prevent="updateRm" class="p-4 mx-auto shadow-md sm:w-1/2 h-fit">
            <h3 class="text-xl">Create Roadmap</h3>
            <BaseInput class="w-full h-fit"  :error="errors?.title" type="text" :label="'Title'" v-model="rm.title" />
            <textarea v-model="rm.description" placeholder="description" class="w-full p-2 bg-transparent placeholder-gray-1 border text-[14px] rounded outline-none border-primary" >
            </textarea>
            <!-- <p v-if="errors.description"  class=" text-danger">{{ errors.description[0] }}</p> -->
            <select v-model="rm.status" class="w-full appearance-none p-2 mt-4 bg-transparent border text-[14px] rounded outline-none border-primary">
                <option disabled selected>Choose status</option>
                <option value="completed">Completed</option>
                <option value="progress">In Progress</option>
                <option value="upcoming">Upcoming</option>
            </select>
            <div class="flex justify-end mt-6">
                <button class="bg-secondary px-6 shadow text-white py-1.5 rounded">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import BaseInput from '@/components/base/BaseInput.vue';
    export default {
        components : {BaseInput},
        data() {
            return {
                id : this.$route.params.id,
                rm : {},
                errors : {}
            }
        },
        methods : {
            updateRm() {
                ApiService.patch(`admin/roadmap/${this.id}` , this.rm).then(() => {
                    this.$router.push({name : 'AdminRoadmapPage'})
                }).catch((res) => {
                    this.errors = res?.response?.data?.errors;
                })
            }
        },
        mounted () {
            ApiService.get(`admin/roadmap/${this.id}`).then((res) => {
                this.rm = res.data.data;
            }).catch((res) => {
                console.log(res);
            })
        }
    }
</script>

<style scoped>

</style>