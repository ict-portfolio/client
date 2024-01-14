<template>
    <div class="flex justify-end">
        <Transition name="bar">
            <aside v-if="sidebar" class="h-screen fixed left-0 top-0 shadow-inner border-r border-[#e2e8f0] z-50 bg-white w-1/6">
                <h1 class="py-3 text-center">
                    <router-link to="/">FIRST ICT</router-link>
                </h1>
                <ul class="p-2">
                    <li class="py-1.5 overflow-hidden" v-for="side in sideItems" :key="side.id">
                        <p v-if="side.items" :class="activeSide == side.id ? 'text-primary ' : ''" class="hover:bg-secondary hover:text-white cursor-pointer flex justify-between items-center py-1.5 px-3" @click="activateSide(side.id)">
                            <span class="select-none"><span style="font-size: 18px;margin: auto 7px; vertical-align: middle;z-index: 1;" class="material-icons-outlined">{{ side.icon }}</span>{{ side.cap }}</span>
                            <span style="user-select: none;" v-if="activeSide != side.id" class="material-icons-outlined">expand_more</span>
                            <span v-else class="material-icons-outlined">expand_less</span>
                        </p>
                        <router-link  :to="{name : side.path}"  class="hover:bg-secondary hover:text-white cursor-pointer flex justify-between items-center py-1.5 px-3" v-else>
                            <span class="select-none"><span style="font-size: 18px;margin: auto 7px; vertical-align: middle;" class="material-icons-outlined">{{ side.icon }}</span>{{ side.cap }}</span>
                        </router-link>
                        <Transition name="side">
                            <ul style="z-index: 0.1;" v-if="side.items && activeSide == side.id" class="px-4 py-2">
                                <li v-for="item in side.items" :key="item.name">
                                    <router-link :to="{name : item.path}" class="hover:bg-secondary text-gray-1 bg-black hover:text-white  block w-full px-2 py-1.5">{{ item.name }}</router-link>
                                </li>
                            </ul>
                        </Transition>
                    </li>
                </ul>
            </aside>
        </Transition>
        <div class="transition-all ease-in-out bg-white" :class="sidebar ? 'w-5/6' : 'w-full'">
            <nav class="sticky top-0 z-50 flex justify-between p-2 bg-white shadow-md">
                <span style="cursor: pointer;margin: auto 0px; font-size: 28px;" @click="sidebar = !sidebar" class="material-icons-outlined">menu</span>
                <ul class="flex">
                    <li class="mx-2">
                        <router-link :to="{name : 'AdminContactsPage'}">
                            <span style="font-size: 28px;color: #374151; cursor: pointer;" class="material-icons-sharp">notifications</span>
                        </router-link>
                    </li>
                    <li class="mx-2">
                        <span @click="showProfile = !showProfile" style="font-size: 28px;color: #374151; cursor: pointer;" class="material-icons-sharp">account_circle</span>
                    </li>
                </ul>
            </nav>
            <main @click="showProfile = false">
                <router-view class="z-10 text-gray-1"></router-view>
            </main>
        </div>

        <UserModal v-if="showProfile" class="absolute w-1/4 shadow-lg top-12 right-12" />
    </div>
</template>

<script>
import UserModal from '@/components/admin/UserModal.vue';
    export default {
        components : {
            UserModal
        },
        data(){
            return {
                sidebar : true,
                activeSide : 0,
                showProfile : false,
                sideItems : [
                    {
                        cap : 'Dashboard',
                        id : 1,
                        icon : 'tv',
                        items : [
                            {
                                name : 'Management',
                                path : 'AdminDashboardPage'
                            },
                            {
                                name : 'Analytics',
                                path : 'AdminDashboardPage'
                            },
                            {
                                name : 'Monitoring',
                                path : 'AdminDashboardPage'
                            },
                        ]
                    },
                    {
                        cap : 'Gallery',
                        id : 2,
                        icon : 'collections',
                        path : 'AdminGalleryPage'
                    },
                    {
                        cap : 'Contents',
                        id : 3,
                        icon : 'content_copy',
                        items : [
                            {
                                name : 'Categories',
                                path : 'AdminCategoriesPage'
                            },
                            {
                                name : 'Contents',
                                path : 'AdminContentsPage'
                            },
                            {
                                name : 'Root_Category',
                                path : 'AdminRootCategoriesPage'
                            },
                        ]
                    },
                    {
                        cap : 'Products',
                        id : "products",
                        icon : 'inventory_2',
                        path : 'AdminProducts'
                    },
                    {
                        cap : 'Services',
                        id : 4,
                        icon : 'flare',
                        path : 'AdminServicePage'
                    },
                    {
                        cap : 'Contacts',
                        id : 4,
                        icon : 'mail',
                        path : 'AdminContactsPage'
                    },
                    {
                        cap : 'Roadmap',
                        id : 5,
                        icon : 'trending_up',
                        path : 'AdminRoadmapPage'
                    },
                    {
                        cap : 'User Management',
                        id : 6,
                        icon : 'groups',
                        path : 'UserManagement'
                    },
                    {
                        cap : 'Calendar',
                        id : 7,
                        icon : 'calendar_month',
                        path : 'AdminDashboardPage'
                    },
                    {
                        cap : 'Employees',
                        id : 8,
                        icon : 'people',
                        path : 'AdminDashboardPage'
                    },
                    {
                        cap : 'Logs',
                        id : 9,
                        icon : 'work_history',
                        path : 'AdminDashboardPage'
                    },
                    {
                        cap : 'Backups',
                        id : 10,
                        icon : 'backup',
                        path : 'AdminDashboardPage'
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