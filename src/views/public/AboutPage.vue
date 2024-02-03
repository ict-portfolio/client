<template>
    <div>
        <div class="w-full h-screen pb-12 mb-6 pt-36 landing">
            <h1 class="w-full my-6 text-[4rem] sm:text-[5rem] text-center text-white">About Us</h1>
            <p class="flex items-center justify-center text-lg font-semibold text-white">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span class="text-secondary">About Us</span>
            </p>
        </div>
        <div class="flex flex-wrap justify-center p-2">
            <div class="items-center justify-between my-6 overflow-hidden md:w-5/6 md:flex">
                <img data-aos="fade-right" class="md:w-[40%] mx-auto md:mx-0 shadow-lg rounded-lg mb-8" src="@/assets/success.jpg" alt="">
                <div  data-aos="fade-left" class="md:w-[55%]">
                    <h1 class="mb-6 text-3xl font-semibold leading-tight text-primary">| Our Commitment to Excellence</h1>
                    <p class="text-lg text-gray-2">
                        At First ICT Solution, we understand that in the rapidly evolving landscape of technology, businesses need reliable, adaptable, and forward-thinking IT solutions. Our commitment to excellence is rooted in our passion for staying at the forefront of technological advancements. With a team of industry experts who are dedicated to continuous learning and professional development, we ensure that your business is equipped with the best-in-class IT infrastructure.
                    </p>
                </div>
            </div>
            <AboutC1 />
            <div class="items-center justify-between my-10 overflow-hidden md:w-5/6 md:flex">
                <div data-aos="fade-left" class="md:w-[55%]">
                    <h1 class="mb-6 text-3xl font-semibold leading-tight text-primary">| Strategic Partnership for Success</h1>
                    <p class="text-lg text-gray-2">
                        We view our client relationships as strategic partnerships. Our approach is to not only address your immediate IT needs but also to work alongside you in achieving your long-term business objectives. Through comprehensive consultations and in-depth assessments, we gain a deep understanding of your unique challenges and goals. This enables us to craft customized solutions that align seamlessly with your vision.
                    </p>
                </div>
                <img data-aos="fade-right" class="md:w-[40%] mx-auto md:mx-0 shadow-lg rounded-lg mt-8" src="@/assets/partnership.jpg" alt="">
            </div>
            <AboutC2 />
            <div class="items-center justify-between my-6 overflow-hidden md:w-5/6 md:flex">
                <img data-aos="fade-right" class="md:w-[40%] shadow-lg rounded-lg mx-auto md:mx-0 mb-8" src="@/assets/chart.png" alt="">
                <div data-aos="fade-left" class="md:w-[55%]">
                    <h1 class="mb-6 text-3xl font-semibold leading-tight text-primary">| Driving Your Business Forward</h1>
                    <p class="text-lg text-gray-2">
                        At First ICT Solution, we believe that our success is measured by your success. Our mission is to empower businesses to not only meet their goals but to surpass them. Through a combination of technical expertise, strategic thinking, and a genuine commitment to your success, we stand ready to be your trusted IT solutions partner.
                        Contact us today to schedule a consultation and experience the transformative power of tailored IT solutions designed with your success in mind. Together, we'll drive your business forward into a future of limitless possibilities.
                    </p>
                </div>
            </div>
            <div class="my-6 md:w-5/6">
                <h1 class="text-5xl font-semibold leading-tight text-center text-primary">Why Choose Us</h1>
                <p class="my-6 text-center">At FIrst ICT Solutions, we're passionate about turning challenges into opportunities. Whether you're a startup looking to establish a digital presence or an established enterprise seeking innovative solutions, we're here to collaborate and propel your business forward. Our dedicated team of experts is ready to discuss how our cutting-edge technologies and personalized approach can elevate your projects. Let's embark on a journey of innovation together. Contact us today, and let's transform your vision into reality.</p>
                <div class="flex justify-center">
                <router-link :to="{name : 'ContactPage'}" class="px-6 py-2 mx-2 text-white transition duration-300 rounded shadow-lg md:text-lg hover:bg-white hover:text-primary bg-primary">Contact Now</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import AboutC1 from '../../components/public/AboutC1.vue'
import AboutC2 from '../../components/public/AboutC2.vue'

    export default {
        components : {
            AboutC1 , AboutC2
        }
    }
</script>

<style scoped>
.landing {
    background-image: url('@/assets/buildings.jpg');
    background-size: cover;
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
</style>