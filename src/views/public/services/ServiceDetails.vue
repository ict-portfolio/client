<template>
    <div>
        <div class="w-full py-12 mb-6 breadcamp">
            <h1 class="my-4 text-2xl font-semibold text-center text-white sm:text-5xl">{{ service.name }}</h1>
            <p class="flex items-center justify-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <router-link :to="{name : 'ServicesPage'}">Services</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>{{ service.name }}</span>
            </p>
        </div>
        <h1 class="text-3xl font-bold text-center">Service Details</h1>
        <div class="mx-auto sm:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="@/assets/proposal.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Proposal</h3>
            </div>
            <p class="my-4" v-html="service.proposal"></p>
        </div>
        <div class="mx-auto sm:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="../../../assets/energy.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Features</h3>
            </div>
            <p class="px-4 my-4" v-html="service.features"></p>
        </div> 
        <div class="sm:w-[80%] mx-auto px-1 mt-5">
            <h1 class="mt-4 text-xl font-semibold text-center">{{service.image_description}}</h1>
            <div class="flex flex-wrap justify-around">
                <img @click="showPopupFun(index)" v-for="(img , index) in service.images" :key="img.id" class="my-5 md:w-[23%] sm:w-[48%] w-full rounded" :src="img.image.url" alt="">
            </div>
        </div>
        <div class="mx-auto sm:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="../../../assets/energy.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Terms & Conditions</h3>
            </div>
                <p class="my-4" v-html="service.terms"></p>
        </div> 
        <ImagePopup :index="index" @changeIndex="changeImg" :images="service.images" :show="showPopup" @close="showPopup = false" />
    </div>
</template>

<script>
import ApiService from '@/services/ApiService'
import ImagePopup from '@/components/public/services/ImagePopup.vue'
    export default {
        components : {ImagePopup},
        data() {
            return {
                slug : this.$route.params.slug,
                service : {},
                showPopup : false,
                index : -1
            }
        },
        methods : {
            showPopupFun(index) {
                this.showPopup = true;
                this.index = index;
            },
            changeImg(i) {
                this.index = i;
            }
        },
        mounted() {
            ApiService.get(`services/${this.slug}`).then((res)=>{
                this.service = res.data.data
                console.log(res.data.data);
            }).catch((res)=>{
                console.log(res);
            })
        },
    }
</script>

<style scoped>
ol , ul {
    list-style: circle;
}
li {
    list-style-type:circle;
}
</style>