<template>
    <div class="flex">
        <Transition name="bar">
            <aside v-if="sidebar" class="h-screen shadow-inner border-r border-[#e2e8f0] z-50 sticky top-0 bg-white w-1/5">
                <h1 class="py-3 text-center">
                    <router-link to="/">FITST ICT</router-link>
                </h1>
                <ul class="p-2">
                    <li class="py-1.5 overflow-hidden" v-for="side in sideItems" :key="side.id">
                        <p v-if="side.items" :class="activeSide == side.id ? 'text-primary ' : ''" class="hover:bg-secondary hover:text-white cursor-pointer flex justify-between items-center py-1.5 px-3" @click="activateSide(side.id)">
                            <span class="select-none"><span style="font-size: 18px;margin: auto 7px; vertical-align: middle;z-index: 1;" class="material-icons-outlined">{{ side.icon }}</span>{{ side.cap }}</span>
                            <span style="user-select: none;" v-if="activeSide != side.id" class="material-icons-outlined">expand_more</span>
                            <span v-else class="material-icons-outlined">expand_less</span>
                        </p>
                        <router-link  class="hover:bg-secondary hover:text-white cursor-pointer flex justify-between items-center py-1.5 px-3" to="/" v-else>
                            <span class="select-none"><span style="font-size: 18px;margin: auto 7px; vertical-align: middle;" class="material-icons-outlined">{{ side.icon }}</span>{{ side.cap }}</span>
                        </router-link>
                        <Transition name="side">
                            <ul style="z-index: 0.1;" v-if="side.items && activeSide == side.id" class="px-4 py-2">
                                <li v-for="item in side.items" :key="item.name">
                                    <router-link class="hover:bg-secondary hover:text-white  block w-full px-2 py-1.5" to="/">{{ item.name }}</router-link>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                </ul>
            </aside>
        </Transition>
        <div class="z-50 transition-all ease-in-out" :class="sidebar ? 'w-5/6' : 'w-full'">
            <nav class="sticky top-0 flex justify-between p-2 bg-white shadow-md">
                <span style="cursor: pointer;margin: auto 0px; font-size: 28px;" @click="sidebar = !sidebar" class="material-icons-outlined">menu</span>
                <ul class="flex">
                    <li class="mx-2">
                        <span style="font-size: 28px;color: #374151; cursor: pointer;" class="material-icons-sharp">notifications</span>
                    </li>
                    <li class="mx-2">
                        <span style="font-size: 28px;color: #374151; cursor: pointer;" class="material-icons-sharp">account_circle</span>
                    </li>
                </ul>
            </nav>
            <main class="h-[2000px] z-30 bg-white">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                sidebar : true,
                activeSide : 0,
                sideItems : [
                    {
                        cap : 'Dashboard',
                        id : 1,
                        icon : 'tv',
                        items : [
                            {
                                name : 'Management',
                            },
                            {
                                name : 'Analytics',
                            },
                            {
                                name : 'Monitoring',
                            },
                        ]
                    },
                    {
                        cap : 'Gallery',
                        id : 2,
                        icon : 'collections'
                    },
                    {
                        cap : 'Contents',
                        id : 3,
                        icon : 'content_copy',
                        items : [
                            {
                                name : 'Categories',
                            },
                            {
                                name : 'Contents',
                            },
                        ]
                    },
                    {
                        cap : 'Applications',
                        id : 4,
                        icon : 'api'
                    },
                    {
                        cap : 'Calendar',
                        id : 5,
                        icon : 'calendar_month'
                    },
                    {
                        cap : 'User Management',
                        id : 6,
                        icon : 'groups'
                    },
                    {
                        cap : 'Employees',
                        id : 7,
                        icon : 'people'
                    },
                    {
                        cap : 'Logs',
                        id : 8,
                        icon : 'work_history'
                    },
                    {
                        cap : 'Backups',
                        id : 9,
                        icon : 'backup'
                    },
                ]
            }
        },
        methods : {
            activateSide(id) {
                if (this.activeSide == id) {
                    this.activeSide = 0;
                } else {
                    this.activeSide = id;
                }
            }
        }
    }
</script>

<style scoped>
.side-enter-from , .side-leave-to {
    margin-top: -5%;
}
.side-enter-active , .side-leave-active {
    transition: all 0.3s;
}

.bar-enter-from , .bar-leave-to {
    margin-left: -20%;
}
.bar-enter-active , .bar-leave-active {
    transition: all 0.3s;
}
</style>