<template>
          <swiper
               :modules="modules"
               effect="slide"
               :speed="1200"
               :autoplay="{
                    delay: 5000,
                    disableOnInteraction: true
               }">
               <swiper-slide v-for="slider in sliders" :key="slider.id">
                    <img @load="handleLoad" v-if="slider.image" :src="slider.image.url" alt="" class="object-cover w-screen h-full">
               </swiper-slide>
          </swiper>
</template>
  
<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper';

import { onMounted , ref } from 'vue';

// import swiper module styles
import 'swiper/css';
import 'swiper/css/pagination';

import ApiService from '@/services/ApiService';

export default {
 components: {
   Swiper,
   SwiperSlide
 },
 setup(props , {emit}) {
   onMounted(() => {
     getSliders();
   });
   const sliders = ref([]);

     const getSliders = () => {
          ApiService.get('get-sliders').then(res => {
               sliders.value = res.data.data;
               if(sliders.value.length){
                    emit('loaded')
               } else {
                    emit('empty')
               }
          }).catch((res) => {
               console.log(res);
               emit('empty')
          });
     }
     const handleLoad = () => {
               emit('loaded')
     }
     return {
          modules: [Autoplay],
          sliders,
          handleLoad
     }
    }

}
</script>