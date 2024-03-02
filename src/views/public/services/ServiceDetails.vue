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
        <div class="mx-auto lg:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="@/assets/proposal.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Proposal</h3>
            </div>
            <p class="my-4" v-html="service.proposal"></p>
        </div>
        <div class="mx-auto lg:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="../../../assets/energy.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Features</h3>
            </div>
            <p class="px-4 my-4" v-html="service.features"></p>
        </div> 
        <div class="lg:w-[80%] mx-auto px-1 mt-5">
            <h1 class="mt-4 text-xl font-semibold text-center">{{service.image_description}}</h1>
            <div class="flex flex-wrap justify-around">
                <img @click="showPopupFun(index)" v-for="(img , index) in service.images" :key="img.id" class="my-5 md:w-[23%] sm:w-[48%] w-full rounded" :src="img.image.url" alt="">
            </div>
        </div>
        <div class="mx-auto lg:w-[80%] py-5 px-1">
            <div class="flex items-center">
                <img class="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]" src="../../../assets/energy.jpg" alt="">
                <h3 class="px-2 text-2xl font-semibold sm:px-5">Terms & Conditions</h3>
            </div>
                <p class="my-4" v-html="service.terms"></p>
        </div> 
        <div class="mx-auto lg:w-[80%] flex justify-center py-5 px-1">
            <div class="flex flex-col items-center p-8 rounded w-fit" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                <p class="mb-4 text-xl font-semibold">Sounds awesome? Make an appointment.</p>
                <button @click="showAppForm" class="px-4 py-2 text-white transition-all duration-200 border rounded-md bg-primary border-primary hover:bg-white hover:text-gray-1">Request an Appointment</button>
            </div>
        </div> 

        <ImagePopup :index="index" @changeIndex="changeImg" :images="service.images" :show="showPopup" @close="showPopup = false" />

        <TransitionRoot appear :show="showAppointment" as="template">
        <Dialog as="div" @close="showAppointment = false" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-full p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                    class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <h1 class="mb-4 text-xl font-semibold">{{ service.name }}</h1>
                    <p>Requesting appointment as - <span class="text-primary">{{ authStore.user.name }}</span></p>
                    <button @click="showLogin = true;" class="mt-1 underline outline-none focus:ring-0 text-secondary">Change account</button>
                    <form @submit.prevent="sendRequest" class="mt-4">
                        <BaseInput
                            v-model="requestForm.phone"
                            class="w-full"
                            type="text"
                            :label="'Phone Number'"
                            />
                        <label class="text-gray-2" for="comment">Add a comment</label>
                        <textarea
                            name="comment"
                            id="comment"
                            v-model="requestForm.comment"
                            cols="30"
                            rows="3"
                            class="w-full border p-1.5 rounded outline-none border-primary ring-0 placeholder:text-sm"
                            placeholder="a short comment to let us know what you are looking for"
                            ></textarea>
                        <div class="flex justify-end mt-1">
                            <button class="px-4 py-2 text-white rounded bg-primary">request</button>
                        </div>
                    </form>
                </DialogPanel>
                </TransitionChild>
            </div>
            </div>
        </Dialog>
        </TransitionRoot>

        <TransitionRoot appear :show="showMessage" as="template">
        <Dialog as="div" @close="showMessage = false" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-full p-4 text-center">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                    class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <p class="text-center">The request is sent. We will reach you as soon as possible. Thank you.</p>
                    <div class="flex justify-end mt-2">
                        <button @click="showMessage = false" class="bg-secondary text-white px-3 rounded py-1.5">Got it</button>
                    </div>
                </DialogPanel>
                </TransitionChild>
            </div>
            </div>
        </Dialog>
        </TransitionRoot>

        <MainModal :show="showLogin" @close="showLogin = false" />

    </div>
</template>

<script>
import ApiService from '@/services/ApiService'
import {useAuthStore} from '@/stores/auth'
import ImagePopup from '@/components/public/services/ImagePopup.vue'
import MainModal from '@/components/auth/MainModal.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel
} from "@headlessui/vue";
    export default {
        components : {
            ImagePopup,
            TransitionRoot,
            TransitionChild,
            Dialog,
            DialogPanel,
            MainModal,
            BaseInput
        },
        data() {
            return {
                slug : this.$route.params.slug,
                authStore : useAuthStore(),
                service : {},
                showPopup : false,
                index : -1,
                showAppointment : false,
                showMessage : false,
                showLogin : false,
                requestForm : {
                    service_id : null,
                    user_id : null,
                    comment : '',
                    phone : ''
                }
            }
        },
        methods : {
            showPopupFun(index) {
                this.showPopup = true;
                this.index = index;
            },
            changeImg(i) {
                this.index = i;
            },
            async showAppForm() {
                await this.authStore.getUser();
                if (this.authStore.user.id) {
                    this.showAppointment = true
                } else {
                    this.showLogin = true;
                }
            },
            sendRequest () {
                this.requestForm.service_id = this.service.id;
                this.requestForm.user_id = this.authStore.user.id;
                console.log(this.requestForm);
                this.showMessage = true;
                this.showAppointment = false;
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