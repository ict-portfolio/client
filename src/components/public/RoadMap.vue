<template>
    <div class="relative py-16 mb-6 text-white bg-black sm:h-screen ">
        <svg class="absolute bottom-6 right-6" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M429.9 186.7v406.4h407.5c-4 34.1-12.8 67.3-26.2 99.1-18.4 43.6-44.8 82.7-78.5 116.3-33.6 33.6-72.8 60-116.4 78.4-45.1 19.1-93 28.7-142.5 28.7-49.4 0-97.4-9.7-142.5-28.7-43.6-18.4-82.7-44.8-116.4-78.4-33.6-33.6-60-72.7-78.4-116.3-19.1-45.1-28.7-93-28.7-142.4s9.7-97.3 28.7-142.4c18.4-43.6 44.8-82.7 78.4-116.3 33.6-33.6 72.8-60 116.4-78.4 31.7-13.2 64.7-21.9 98.6-26m44-46.6c-226.4 0-410 183.5-410 409.8s183.6 409.8 410 409.8 410-183.5 410-409.8v-0.8h-410v-409z" fill="#39393A"></path><path d="M566.1 80.5c43.7 1.7 86.4 10.6 127 26.4 44 17.1 84.2 41.8 119.6 73.5 71.7 64.1 117.4 151.7 128.7 246.7 1.2 9.9 2 20 2.4 30.2H566.1V80.5m-16-16.3v409h410c0-16.3-1-32.3-2.9-48.1C933.1 221.9 760 64.2 550.1 64.2zM264.7 770.4c-23.1-23.1-42.3-49.1-57.3-77.7l-14.7 6.5c35.7 68.2 94 122.7 165 153.5l4.3-15.6c-36.3-16-69.1-38.4-97.3-66.7z" fill="#E73B37"></path></g></svg>
        <svg class="absolute top-6 left-6" width="100px" height="100px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 512m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M512 306.8c27.7 0 54.6 5.4 79.8 16.1 24.4 10.3 46.4 25.1 65.2 44s33.6 40.8 44 65.2c10.7 25.3 16.1 52.1 16.1 79.8 0 27.7-5.4 54.6-16.1 79.8-10.3 24.4-25.1 46.4-44 65.2-18.8 18.8-40.8 33.6-65.2 44-25.3 10.7-52.1 16.1-79.8 16.1-27.7 0-54.6-5.4-79.8-16.1-24.4-10.3-46.4-25.1-65.2-44-18.8-18.8-33.6-40.8-44-65.2-10.7-25.3-16.1-52.1-16.1-79.8 0-27.7 5.4-54.6 16.1-79.8 10.3-24.4 25.1-46.4 44-65.2s40.8-33.6 65.2-44c25.2-10.6 52.1-16.1 79.8-16.1m0-22c-125.4 0-227.1 101.7-227.1 227.1S386.6 739.1 512 739.1c125.4 0 227.1-101.7 227.1-227.1S637.4 284.8 512 284.8z" fill="#39393A"></path><path d="M512 618.7c-58.9 0-106.8-47.9-106.8-106.8S453.1 405.1 512 405.1 618.8 453 618.8 511.9 570.9 618.7 512 618.7z m0-193.5c-47.9 0-86.8 38.9-86.8 86.8s38.9 86.8 86.8 86.8 86.8-38.9 86.8-86.8-38.9-86.8-86.8-86.8z" fill="#E73B37"></path><path d="M544.2 107.3l34.1 92.3 7.4 19.9 20.2 6.6c10.3 3.4 32.1 12.9 43.4 18.1l18.7 8.6 18.6-8.9 87.9-41.8 46.4 46.5-41.2 89.4-8.9 19.3 9.6 19c6.8 13.4 12.6 27.5 17.4 41.9l6.7 20.5 20.3 7.2 91.7 32.6v65.7l-92.3 34.1-19.9 7.4-6.6 20.2c-4.7 14.4-10.6 28.4-17.4 41.9l-9.8 19.3 9.3 19.5 41.8 87.9-46.5 46.5-89.1-41.3-19.3-8.9-19 9.6c-13.4 6.8-27.5 12.6-41.9 17.4l-20.5 6.7-7.2 20.3-32.6 91.7h-65.7l-34.1-92.3-7.4-19.9-20.2-6.6c-10.3-3.4-32.1-12.9-43.4-18.1L356 771l-18.6 8.9-87.9 41.8-46.4-46.5 41.2-89.3 8.9-19.3-9.6-19c-6.8-13.4-12.6-27.5-17.4-41.9l-6.7-20.5-20.3-7.2-91.7-32.6v-65.7l92.3-34.1 19.9-7.4 6.6-20.2c3.4-10.3 12.9-32.1 18.1-43.4l8.6-18.7-8.9-18.6-41.8-87.9 46.4-46.4 89.3 41.2 19.3 8.9 19-9.6c13.4-6.8 27.5-12.6 41.9-17.4l20.5-6.7 7.2-20.3 32.6-91.7h65.7m30.7-44.1H447.4l-43 121c-16.6 5.5-32.7 12.1-48.1 19.9l-117.2-54-90.1 90.1 55.2 116s-14.5 31.4-19.9 48.1l-121 44.7v127.4l121 43c5.5 16.6 12.1 32.6 19.9 48l-54 117.2 90.1 90.1 116-55.2s31.4 14.5 48.1 19.9l44.7 121h127.4l43-121c16.6-5.5 32.6-12.1 48-19.9l117.2 54 90.1-90.1-55.2-116c7.8-15.4 14.5-31.4 19.9-48l121-44.7V447.4l-121-43c-5.5-16.6-12.1-32.6-19.9-48l54-117.2-90.1-90.1-115.9 55.2s-31.5-14.5-48.1-19.9L574.9 63.3z" fill="#39393A"></path></g></svg>
        <h1 class="w-full text-3xl font-bold text-center sm:mb-6 sm:text-5xl">Roadmap</h1>
        <div class="flex-wrap items-start justify-center sm:flex">
            <div class="sm:w-[30%] sm:px-6 py-6">
                <ul class="flex list-none sm:block">
                    <li :class="active == 'completed' ? 'text-danger text-base sm:text-3xl' : 'sm:text-2xl text-sm'" class="flex flex-col items-center p-4 transition-all duration-100 sm:flex-row font-semi-bold" @click="active = 'completed'">
                        <span :style="[active == 'completed' ? {scale : '200%'} : {scale : '100%'}]" style="color: #E83845;transition: all 0.5s ease;" class="material-icons-outlined">adjust</span>
                        <span class="sm:ml-[1rem] text-center mt-2 sm:mt-0">Completed</span>
                    </li>
                    <li :class="active == 'progress' ? 'text-danger text-base sm:text-3xl' : 'sm:text-2xl text-sm'" class="flex flex-col items-center p-4 transition-all duration-100 sm:flex-row font-semi-bold" @click="active = 'progress'">
                        <span :style="[active == 'progress' ? {scale : '200%'} : {scale : '100%'}]" style="color: #E83845;transition: all 0.5s ease;" class="material-icons-outlined">adjust</span>
                        <span class="sm:ml-[1rem] text-center mt-2 sm:mt-0">In Progress</span>
                    </li>
                    <li :class="active == 'upcoming' ? 'text-danger text-base sm:text-3xl' : 'sm:text-2xl text-sm'" class="flex flex-col items-center p-4 transition-all duration-100 sm:flex-row font-semi-bold" @click="active = 'upcoming'">
                        <span :style="[active == 'upcoming' ? {scale : '200%'} : {scale : '100%'}]" style="color: #E83845;transition: all 0.5s ease;" class="material-icons-outlined">adjust</span>
                        <span class="sm:ml-[1rem] text-center mt-2 sm:mt-0">Upcoming</span>
                    </li>
                </ul>
            </div>
            <div class="sm:w-[60%] sm:px-6 py-6 sm:text-[1.5rem] font-semi-bold">
                <Transition name="list" mode="out-in">
                    <ul class="list-none " v-if="active == 'upcoming'">
                        <li class="p-3" v-for="coming in upcoming" :key="coming.id">
                            <div @click="showDescription(coming.id)" class="flex items-center">
                                <span style="margin-right: 1rem;color: #E83845;font-size:2rem;" class="material-icons-outlined">circle</span>
                                <span :class="showDes == coming.id ? 'text-secondary' : ''">{{ coming.title }} {{ coming.status }}</span>
                            </div>
                            <p class="px-2 py-2 text-sm transition-all sm:px-12 sm:text-base" v-if="showDes == coming.id">
                                {{ coming.description }}
                            </p>
                        </li>
                    </ul>
                    <ul class="list-none " v-else-if="active == 'completed'">
                        <li class="p-3" v-for="com in completed" :key="com.id">
                            <div @click="showDescription(com.id)" class="flex items-center">
                                <span style="margin-right: 1rem;color: #E83845;font-size:2rem;" class="material-icons-outlined">check_circle</span>
                                <span :class="showDes == com.id ? 'text-secondary' : ''">{{ com.title }} {{ com.status }}</span>
                            </div>
                            <p class="px-2 py-2 text-sm transition-all sm:px-12 sm:text-base" v-if="showDes == com.id">
                                {{ com.description }}
                            </p>
                        </li>
                    </ul>
                    <ul class="list-none " v-else>
                        <li class="p-3" v-for="pro in progress" :key="pro.id">
                            <div @click="showDescription(pro.id)" class="flex items-center">
                                <span style="margin-right: 1rem;color: #E83845;font-size:2rem;" class="material-icons-outlined">adjust</span>
                                <span :class="showDes == pro.id ? 'text-secondary' : ''">{{ pro.title }} {{ pro.status }}</span>
                            </div>
                            <p class="px-2 py-2 text-sm transition-all sm:px-12 sm:text-base" v-if="showDes == pro.id">
                                {{ pro.description }}
                            </p>
                        </li>
                    </ul>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';

    export default {
        data() {
            return {
                progress : [],
                completed : [],
                upcoming : [],
                active : "completed",
                showDes : ""
            }
        },
        methods : {
            getRoadMap() {
                ApiService.get('roadmap').then((res) => {
                    res.data.data.map((map) => {
                        if (map.status == "upcoming") {
                            this.upcoming.push(map)
                        } else if (map.status == "completed") {
                            this.completed.push(map)
                        } else {
                            this.progress.push(map)
                        }
                    })
                }).catch((res) => {
                    console.log(res);
                })
            },
            showDescription(id) {
                if (this.showDes == id) {
                    this.showDes = "";
                } else {
                    this.showDes = id;
                }
            }
        },
        mounted() {
            this.getRoadMap()
        }
    }
</script>

<style scoped>
.list-enter-from , .list-leave-to {
    opacity: 0;
}
.list-enter-active , .list-leave-active {
    transition: all 0.3s ease-in;
}
li {
    cursor: pointer;
}
</style>