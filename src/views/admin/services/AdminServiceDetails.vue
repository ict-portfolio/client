<template>
    <div class="flex-wrap justify-center min-h-screen p-1 py-4 md:flex sm:p-4">
        <div class="w-full h-fit">
            <span style="cursor: pointer;margin: auto 0px;" class="material-icons-sharp" @click="$router.back()">arrow_back</span>
        </div>
        <div class="md:w-[45%]" v-if="service.images?.length">
            <figure>
                <img class="w-full mx-auto rounded" :src="defaultImage" alt="">
            </figure>
            <div class="flex w-full mt-4">
                <img v-for="image in service?.images" :key="image.id" :src="image?.image?.url"  @click="defaultImage = image?.image?.url" class="w-[22%] mx-auto rounded cursor-pointer" alt="">
            </div>
        </div>
        <div class="md:w-[45%] my-6 md:my-0 md:px-4">
            <h1 class="text-2xl">{{ service.name }}</h1>
            <h3 class="my-2 text-xl text-primary">Category - {{ service.category_name }}</h3>
            <h5 class="mb-4 text-xl">Slug - {{ service.slug }}</h5>
            <h6 class="mt-1 text-xl">Proposal - {{ service.proposal }}</h6>
            <h6 class="mt-1 text-xl">Proposal - {{ service. }}</h6>
            <p v-html="service.description" class="mb-4"></p>
            <div class="flex mt-6">
                <router-link :to="{name : 'EditService' , params : {id : service.id}}" class="flex items-center px-3 py-3 mr-4 text-white rounded-full bg-secondary">
                    <span class="material-icons-outlined">edit</span>
                </router-link>
                <button @click="deleteService" class="flex items-center px-3 py-2 text-white rounded-full bg-danger">
                    <span class="material-icons-outlined">delete</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
    export default {
        data () {
            return {
                service : {},
                defaultImage : '',
            }
        },
        methods : {
            getServices () {
                ApiService.get(`admin/services/${this.$route.params.id}`).then((res) => {
                    console.log(res);
                    this.service = res.data.data
                    this.defaultImage = this.service?.images[0]?.image?.url;
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteService () {
                ApiService.delete(`admin/services/${this.service.id}`).then(() => {
                    this.$router.push({name : 'AdminServicePage'})
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted () {
            this.getServices()
        }
    }
</script>

<style scoped>

</style>