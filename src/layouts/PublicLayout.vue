<template>
    <div class="bg-white text-gray-1">

        <!-- For Large Screen -->
        <nav class="absolute z-50 w-full font-semibold text-white">
            <div class="sm:flex justify-between w-full sm:px-8 sm:py-4 py-2 border-b border-[#94a3b8] border-opacity-50">
                <SocialPages />
                <ul class="hidden sm:flex">
                    <li class="mx-3">
                        <a href="https://www.google.com" target="_blank">firstedu@gmail.com</a>
                    </li>
                    <li class="mx-3 font-sans">
                        <a href="https://www.google.com" target="_blank">+959123456789</a>
                    </li>
                    <li class="mx-3">
                        <router-link class="hover:text-secondary" :to="{name : 'LoginPage'}">Sign In</router-link>
                    </li>
                </ul>
            </div>
            <div class="flex justify-between w-full p-2 py-4 sm:px-8">
                <h1 class="text-xl italic font-bold">
                    <router-link to="/">FIRST ICT</router-link>
                </h1>
                <button id="menuBtn" class="sm:hidden" @click="moblieView = !moblieView">
                    <span id="menuSpan" class="material-icons-outlined">menu</span>
                </button>
                <ul class="hidden my-auto sm:flex">
                    <li class="mx-4 hover:text-tertiary" v-for="item in navItems" :key="item.name">
                        <router-link class="flex items-center" :to="{name : item.path}">
                            <!-- <span style="margin-right: 4px;margin-top: -2px;font-size: 20px;" class="material-icons-sharp">{{ item.icon }}</span> -->
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- For Small Screen -->
        <Transition name="side">
            <nav v-if="moblieView" class="fixed top-0 left-0 z-50 w-2/3 h-screen p-4 font-semibold text-white" style="background: rgb(45,164,253);background: linear-gradient(0deg, rgba(45,164,253,1) 0%, rgba(114,45,253,1) 100%);">
                <div class="flex justify-end">
                    <span @click="moblieView = false" style="margin: 20px 0px;font-size: 30px;" class="material-icons-sharp">cancel</span>
                </div>
                <h1 class="px-4 text-3xl italic">
                    <router-link to="/">FIRST ICT</router-link>
                </h1>
                <ul class="mx-4 my-10 sm:m-0 ">
                    <li class="my-6 hover:text-tertiary" v-for="item in navItems" :key="item.name">
                        <router-link @click="moblieView = false" class="flex items-center w-full pb-1 border-b border-[#d1d5db]" :to="{name : item.path}">
                            <span style="margin-right: 7px;font-size: 20px;" class="material-icons-sharp">{{ item.icon }}</span>
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>

                <SocialPages />
            </nav>
        </Transition>

        <main class="z-10 w-screen">
            <router-view></router-view>
        </main>

        <footer class="flex-wrap px-2 py-8 mt-10 font-sans text-white sm:px-12 footer bg-primary sm:flex">
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
                    <h1 class="text-xl">Company</h1>
                    <li class="my-3 hover:text-tertiary" v-for="item in navItems" :key="item.name">
                        <router-link :to="{name : item.path}">{{ item.name }}</router-link>
                    </li>
                </ul>
                <ul class="m-10 sm:m-0 ">
                    <h1 class="text-xl">Company</h1>
                    <li class="my-3 hover:text-tertiary" v-for="item in navItems" :key="item.name">
                        <router-link :to="{name : item.path}">{{ item.name }}</router-link>
                    </li>
                </ul>
                <SocialPages class="mx-6 sm:mx-0" />
            </div>
            <h1 class="w-full mt-10 text-center">© FirstICT | IT Solutions and Development. All Rights Reserved.</h1>
        </footer>
    </div>
</template>

<script>
import SocialPages from '../components/public/SocialPages.vue'
    export default {
        components : {
            SocialPages
        },
        data() {
            return {
                moblieView : false,
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
            document.addEventListener('click' , (e) => {
                if (e.target.id != 'menuSpan') {
                    this.moblieView = false;
                }
            })
        }
    }
</script>

<style scoped>
.footer {
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
    background-position: center;
}

.side-enter-from , .side-leave-to {
    margin-left: -50%;
    opacity: 0.5;
}
.side-enter-active , .side-leave-active {
    transition: all 0.1s ease-in;
}
</style>

<!-- :class="$router.currentRoute.value.path != '/' ? 'bg-black' : 'bg-white'" -->
<!-- :class="$router.currentRoute.value.path == '/' ? 'absolute' : 'bg-primary'" -->