<template>
    <div>
        <div class="flex justify-center w-full pb-12 mb-6 pt-36 breadcamp">
            <p class="flex items-center text-lg text-secondary">
                <router-link to="/">Home</router-link>
                <span style="margin: 0px 8px;" class="material-icons-outlined">navigate_next</span>
                <span>Contact Us</span>
            </p>
        </div>
        <div class="px-2 my-8 md:px-20">
            <div class="items-center justify-between mb-12 sm:flex">
                <img class="sm:w-[45%] my-2" src="https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/contact-exp-min.png" alt="">
                <div class="sm:w-[45%] my-2">
                    <h1 style="line-height: 3rem;" class="mb-6 text-3xl font-bold tracking-wider text-dense sm:text-4xl">Growth strategies to be effective & competitive</h1>
                    <p class="leading-7">
                        Everything we do and dream up has a solid design impact. We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.Everything we do and dream up has a solid design impact. We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.
                    </p>
                </div>
            </div>

            <div class="justify-between my-12 overflow-hidden sm:flex">
                <div data-aos="slide-up" :data-aos-delay="index * 50" v-for="contact,index in contacts" :key="contact.title" class="sm:w-[30%] hover:shadow-lg flex flex-col items-center border rounded-lg border-[#d1d5db] p-4 my-4">
                    <span style="margin: 0px 8px;background-color: cornflowerblue;border-radius: 50%;padding: 12px;color: white;font-size: 28px;" class="material-icons-sharp">{{ contact.icon }}</span>
                    <h1 class="my-4 text-2xl text-dense">{{ contact.title }}</h1>
                    <p class="text-center">{{ contact.body }}</p>
                </div>
            </div>
            <div class="md:flex justify-between my-12 shadow-lg rounded-lg bg-[#EFF1F5] px-4 py-12  md:px-12">
                <div class="md:w-[45%]">
                    <h1 class="mb-6 text-3xl tracking-wide md:text-5xl text-dense">We'd love to hear from you.</h1>
                    <p class="tracking-wide text-gray-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure culpa molestiae autem voluptatem ad sequi fugit, blanditiis reiciendis, voluptatum fuga maiores.</p>
                </div>
                <form @submit.prevent="contactFunction" class="md:w-[45%] md:mt-0 mt-12">
                    <BaseInput :error="errors.name" v-model="formData.name" class="w-full" type="text" :label="'Name'" />
                    <BaseInput :error="errors.email" v-model="formData.email" class="w-full" type="text" :label="'Email'" />
                    <textarea v-model="formData.message" class="w-full p-2 bg-transparent border rounded outline-none border-primary placeholder:text-gray-1 placeholder:text-sm" placeholder="Message" name="" id="" cols="30" rows="3"></textarea>
                    <p class="mx-2 text-danger" v-if="errors.message">{{ errors.message[0] }}</p>
                    <div class="flex justify-end mt-4">
                        <button class="px-6 py-2 text-white transition duration-300 border rounded-full bg-primary hover:bg-white hover:text-primary border-primary">Send Message</button>
                    </div>
                </form>
            </div>

            <Transition name="message">
                <div v-if="showMessage" class="fixed p-8 bg-white rounded shadow top-1/2 left-1/2" style="transform: translate(-50% ,  -50%);">
                    <p class="mb-2 text-center">Thank you for reaching us. We will be in touch as soon as possible.</p>
                    <p class="text-center">Have a good day.</p>
                </div>
            </Transition>

        </div>
    </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue';
import ApiService from '@/services/ApiService';
    export default {
        components : {
            BaseInput
        },
        data() {
            return {
                showMessage : false,
                formData : {
                    name : '',
                    email : '',
                    message : ''
                },
                errors : {},
                contacts : [
                    {
                        icon : 'call',
                        title : 'Phone Number',
                        body : '+959 123456789'
                    },
                    {
                        icon : 'mail',
                        title : 'Email Address',
                        body : 'firstict@gmail.com'
                    },
                    {
                        icon : 'location_on',
                        title : 'Office Address',
                        body : 'No.4, Anaw Ya Htar Sweet, Min Gyi Road, Hlaing Thar Ya, Yangon'
                    },
                ]
            }
        },
        methods : {
            contactFunction() {
                ApiService.post('contact' , this.formData).then(() => {
                    this.showMessage = true;
                    setTimeout(() => {
                        this.showMessage = false;
                    } , 3000)
                }).catch((res) => {
                    if (res.response.data && res.response.data.errors) {
                        this.errors = res.response.data.errors
                        setTimeout(() => {
                            this.errors = {}
                        } , 3000)
                    }
                })
            }
        }
    }
</script>

<style scoped>
.message-enter-from , .message-leave-to {
    margin-top: -2%;
    opacity: 0.5;
}
.message-enter-active , .message-leave-active {
    transition: all 0.1s ease-in;
}
</style>