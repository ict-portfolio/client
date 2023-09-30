<template>

    <swiper :modules="modules" effect="slide" :speed="800" :pagination="{ clickable: true }"   :autoplay="{

         delay: 3000,
         disableOnInteraction: true
    }">

         <swiper-slide v-for="slider in sliders" :key="slider.id">
              <img v-if="slider.image" :src="filePath.imagePath(slider.image.image)" alt="" class="object-cover w-screen h-full">
         </swiper-slide>
    </swiper>
</template>
  
<script>

import { Pagination,Autoplay } from 'swiper'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper';

import { onMounted , ref } from 'vue';
import filePath from '@/services/FilePath'

// import swiper module styles
import 'swiper/css';
import 'swiper/css/pagination';

import ApiService from '@/services/ApiService';

export default {
 components: {
   Swiper,
   SwiperSlide
 },
 data(){
    return {
        filePath : filePath
    }
 },
 setup() {
   onMounted(() => {
     getSliders();
   });
   const sliders = ref([
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=120',
    'https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=120',
    'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=120',
   ]);

         const getSliders = () => {
              ApiService.get('get-sliders').then(res => {
                   sliders.value = res.data.data;
                   console.log(sliders.value);
              });
         }
         return {
              modules: [Pagination,Autoplay],
              sliders
         }
    }

}
</script>