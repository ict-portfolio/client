<template>
    <div class="bg-white text-gray-1">

        <!-- For Large Screen -->
        <nav class="sticky top-0 z-50 w-full font-semibold text-white">
            <nav-bar></nav-bar>
            <!-- <div class="flex justify-between w-full sm:px-8 py-2 border-b border-[#94a3b8] border-opacity-50">
                <SocialPages />
                <ul class="hidden sm:flex">
                    <li class="mx-3">
                        <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=firstict@gmail.com`" target="_blank" title="Send Message">
                            firstict@gmail.com
                        </a>
                    </li>
                    <li class="mx-3">
                        <span>+959123456789</span>
                    </li>
                    <li class="mx-3">
                        <button @click="navigate" class="hover:text-secondary">Sign In</button>
                    </li>
                </ul>
                <button @click="navigate" class="inline mr-2 sm:hidden hover:text-secondary">sign in</button>
            </div> -->
        </nav>

        <!-- For Small Screen style="background: rgb(45,164,253);background: linear-gradient(0deg, rgba(45,164,253,1) 0%, rgba(114,45,253,1) 100%);" -->
        <!-- <Transition name="side">
            <nav v-if="moblieView" class="fixed top-0 left-0 z-50 w-2/3 h-screen p-4 font-semibold text-[#ffffff]   bg-[#262e3f]">
                <div class="flex justify-end">
                    <span @click="moblieView = false" style="margin: 20px 0px;font-size: 30px;cursor:pointer;" class="material-icons-sharp">cancel</span>
                </div>
                <h1 class="px-4 text-3xl italic">
                    <router-link to="/">FIRST ICT</router-link>
                </h1>
                <ul class="mx-4 my-10 sm:m-0 ">
                    <li class="my-6 hover:text-primary" v-for="item in navItems" :key="item.name">
                        <router-link @click="moblieView = false" class="flex items-center w-full pb-1 border-b border-[#d1d5db]" :to="{name : item.path}">
                            <span style="margin-right: 7px;font-size: 20px;" class="material-icons-sharp">{{ item.icon }}</span>
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>

                <SocialPages />
            </nav>
        </Transition> -->

        <main class="z-10 w-screen">
            <router-view></router-view>
        </main>

        <img src="@/assets/footer.png" style="height: 360px;width: 100%;" alt="">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#333F55" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,117.3C640,107,800,53,960,26.7C1120,0,1280,0,1360,0L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>                 -->
        <footer class="flex-wrap px-2 py-8 text-white sm:px-12 footer bg-primary sm:flex">
            <div class="sm:w-1/2">
                <h1 class="mb-6 ml-1 text-3xl italic text-center sm:text-left">FIRST ICT</h1>
                <p class="flex items-center my-4">
                    <span style="margin-right: 12px;" class="material-icons-sharp">location_on</span>
                    St.Kemacetan timur No.13 Block Q2 Jakarta - Hlaing Thar Yar
                </p>
                <p class="flex items-center my-4">
                    <span style="margin-right: 12px;" class="material-icons-sharp">call</span>
                    +959 123456789
                </p>
                <p class="flex items-center my-4">
                    <span style="margin-right: 12px;" class="material-icons-sharp">email</span>
                    firstedu@gmail.com
                </p>
            </div>
            <div class="justify-between text-sm sm:flex sm:w-1/2">
                <ul class="m-10 sm:m-0 ">
                    <h1 class="text-2xl">Company</h1>
                    <li class="my-3 hover:text-primary" v-for="item in navItems" :key="item.name">
                        <router-link class="flex items-center" :to="{name : item.path}">
                            <span style="color: rgb(49, 93, 240);" class="material-icons-outlined">chevron_right</span>
                        {{ item.name }}</router-link>
                    </li>
                </ul>
                <div class="w-1/2 mx-6 sm:mx-0">
                    <SocialPages />
                    <p class="mt-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut maiores obcaecati sequi ipsum cumque quibusdam consectetur repellat perferendis possimus ex porro dolores neque, reprehenderit aperiam, corrupti ut nesciunt error rem.
                    </p>
                </div>
            </div>
            <h1 class="w-full mt-10 text-center">© FirstICT | IT Solutions and Development. All Rights Reserved.</h1>
        </footer>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import SocialPages from '../components/public/SocialPages.vue'
import NavBar from './NavBar.vue';
    export default {
        components : {
            SocialPages , NavBar
        },
        data() {
            return {
                authStore : useAuthStore(),
                navItems : [
                    {
                        name : 'Home',
                        icon : 'home',
                        path : 'IndexPage'
                    },
                    {
                        name : 'Services',
                        icon : 'widgets',
                        path : 'ServicesPage'
                    },
                    {
                        name : 'Articles',
                        icon : 'content_copy',
                        path : 'ContentsPage'
                    },
                    {
                        name : 'About Us',
                        icon : 'people',
                        path : 'AboutPage'
                    },
                    {
                        name : 'Contact Us',
                        icon : 'call',
                        path : 'ContactPage'
                    }
                ]
            }
        },
        mounted() {

        },
        methods : {
            navigate(){
                this.authStore.getUser();
                if (this.authStore.user && this.authStore.user.email) {
                    this.$router.push({name : 'AdminDashboardPage'})
                } else {
                    this.$router.push({name : 'LoginPage'})
                }
            }
        }
    }
</script>

<style scoped>
.footer {
    background: rgb(51,63,85);
    background: radial-gradient(0deg, rgba(51,63,85,0.9444152661064426) 0%, rgba(34,42,59,1) 100%);
}
</style>