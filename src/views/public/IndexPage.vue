<template>
    <div id="root">
        <Teleport to="body">
            <div v-if="loading" class="absolute z-50 flex justify-center w-full p-2 text-black lg:w-1/2 left-1/2 top-1/2" style="transform: translate(-50% , -50%);">
                <span class="loader">
                    <svg fill="#605DFF" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_2_"> <path id="XMLID_4_" d="M97.5,165c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60 C90.784,180,97.5,173.284,97.5,165z"></path> <path id="XMLID_5_" d="M307.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S315.784,150,307.5,150z"></path> <path id="XMLID_6_" d="M172.5,90c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15s-15,6.716-15,15v60 C157.5,83.284,164.216,90,172.5,90z"></path> <path id="XMLID_7_" d="M172.501,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60 C187.501,246.716,180.785,240,172.501,240z"></path> <path id="XMLID_8_" d="M77.04,48.327c-5.856-5.858-15.354-5.857-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.428 c2.929,2.929,6.768,4.394,10.606,4.394c3.838,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L77.04,48.327z"></path> <path id="XMLID_9_" d="M246.746,218.034c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.858-5.857,15.355,0,21.213l42.428,42.426 c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.465,10.606-4.393c5.858-5.858,5.858-15.355,0-21.213L246.746,218.034z"></path> <path id="XMLID_10_" d="M98.254,218.034L55.828,260.46c-5.858,5.858-5.858,15.355,0,21.213c2.929,2.929,6.768,4.393,10.607,4.393 c3.839,0,7.678-1.464,10.606-4.393l42.426-42.426c5.858-5.858,5.858-15.355,0-21.213 C113.609,212.176,104.111,212.176,98.254,218.034z"></path> </g> </g></svg>
                </span>
            </div>
        </Teleport>
        <div class="mb-12" :class="noSlider ? 'fillSlider' : 'bg-black'">
            <MainSwiper @empty="emptySlider" @loaded="sliderLoaded" class="z-10 w-screen h-screen opacity-80" />
        </div>
        <div class="absolute z-40 w-full p-2 text-white hero-text lg:w-1/2 left-1/2 top-1/2" style="transform: translate(-50% , -50%);">
            <h1 class="p-3 text-3xl font-extrabold tracking-wider text-center md:text-6xl">Helping Business Through Technology</h1>
            <p class="my-3 font-bold text-center md:text-lg">Employing cutting-edge technologies, our team of seasoned experts orchestrates seamless integrations, ensuring optimal performance and scalability across diverse systems and platforms.</p>
            <div class="flex justify-center mt-4">
                <router-link :to="{name : 'ContactPage'}" class="px-6 py-2 mx-2 font-semibold transition duration-300 rounded shadow-lg md:text-lg hover:bg-white hover:text-primary bg-primary">Contact Now</router-link>
            </div>
        </div>
        
        <HPC1 />

        <HPServices v-if="loadOthers" />

        <HPC2 v-if="loadOthers" />

        <!-- <HPContents v-if="loadOthers" /> -->
        <!-- <div class="max-w-screen-md mx-auto">
            <ProductCarousel class="sm:w-[2/3] lg:w-[1/2]" />
        </div> -->

        <HPProducts v-if="loadOthers" />

        <RoadMap v-if="loadOthers" />

        <HPC3 v-if="loadOthers" />

    </div>
</template>

<script>
import MainSwiper from '../../components/public/MainSwiper.vue'
import HPC1 from '../../components/public/HPC1.vue'
import HPServices from '@/components/public/HPServices.vue';
import HPC2 from '../../components/public/HPC2.vue';
// import HPContents from '@/components/public/HPContents.vue';
import HPProducts from '@/components/public/HPProducts.vue';
import HPC3 from '../../components/public/HPC3.vue';
import RoadMap from '@/components/public/RoadMap.vue';
// import ProductCarousel from '@/components/public/products/ProductCarousel.vue';
import AOS from 'aos';

    export default {
        components : {
            MainSwiper , HPC1 , HPServices , HPC2  , HPC3 , RoadMap , HPProducts
        },
        data() {
            return {
                loading : true,
                noSlider : true,
                loadOthers : false
            }
        },
        methods : {
            sliderLoaded() {
                setTimeout(() => {
                    this.loading = false;
                    this.noSlider = false;
                    this.loadOthers = true;
                    document.getElementById('app').classList.remove('hidden')
                    AOS.refresh();
                } , 1000)
            },
            emptySlider(){
                setTimeout(() => {
                    this.loading = false;
                    this.loadOthers = true;
                    document.getElementById('app').classList.remove('hidden')
                    AOS.refresh();
                } , 1000)
            }
        },
        mounted() {
            document.getElementById('app').classList.add('hidden')
        }
    }
</script>

<style scoped>
.fillSlider {
    background-image: url('@/assets/ds.jpg');
    background-size: cover;
    background-position: center;
}
.loader {
    animation-name: spin;
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
}
.hero-text {
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>