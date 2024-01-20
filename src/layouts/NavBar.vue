<template>
    <div>
        <div class="sm:flex hidden items-center justify-around py-2 bg-[#0a0a0a]">
            <div class="pr-12">
                <router-link :to="{ name: 'IndexPage' }" class="text-xl italic">First ICT</router-link>
            </div>

            <div class="flex pl-12">
                <PopoverGroup class="flex">
                    <!-- Solutions -->
                    <Popover v-slot="{ open }" class="relative">
                        <PopoverButton :class="open ? 'text-secondary' : 'text-white hover:text-secondary'
                            "
                            class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none">
                            <span class="mr-1">Solutions</span>
                            <span class="material-icons-outlined">expand_more</span>
                        </PopoverButton>

                        <transition enter-active-class="transition duration-200 ease-out"
                            enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                            <PopoverPanel
                                class="absolute z-50 w-screen max-w-lg mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-2xl">
                                <div class="z-50 flex justify-between overflow-hidden text-sm rounded shadow-lg bg-coal">
                                    <ul class="w-[45%] p-4">
                                        <li
                                            v-for="solution in solutions" :key="solution.id"
                                            @mouseenter="activeSolution = solution"
                                            :class="activeSolution.id == solution.id ? 'bg-dense' : ''">
                                            <router-link
                                                class="relative flex items-center px-2 py-1 my-1 rounded-md cursor-pointer hover:bg-gray-1"    
                                                :to="{name : 'RootCategoryPage' , params : {rootCategory : solution.slug}}">
                                                <img class="w-[24px] h-[24px] mr-2" :src="solution.icon" alt="" />
                                                <PopoverButton class="text-left">{{ solution.name }}</PopoverButton>
                                                <span style="position: absolute; right: 3px" class="material-icons-outlined">chevron_right</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                    <ul class="w-[53%] bg p-4">
                                        <li
                                            v-for="category in activeSolution.categories"
                                            :key="category.id"
                                            class="flex items-center px-2 py-1 my-1 rounded-md hover:bg-dense">
                                                <img class="w-[24px] h-[24px] mr-2" :src="category.icon" alt="" />
                                                <router-link :to="{name : 'CategoryPage' , params : {rootCategory : activeSolution.slug , category : category.slug}}">
                                                    <PopoverButton class="text-left">
                                                        {{ category.name }}
                                                    </PopoverButton>
                                                </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>

                    <!-- Products -->
                    <Popover v-slot="{ open }" class="relative">
                        <PopoverButton :class="open ? 'text-secondary' : 'text-white hover:text-secondary'
                            "
                            class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none">
                            <span class="mr-1">Products</span>
                            <span class="material-icons-outlined">expand_more</span>
                        </PopoverButton>

                        <transition enter-active-class="transition duration-200 ease-out"
                            enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                            <PopoverPanel
                                class="absolute z-50 w-screen max-w-lg mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl">
                                <div class="z-50 flex justify-between overflow-hidden text-sm rounded shadow-lg bg-coal">
                                    <ul class="w-[45%] p-4">
                                        <li v-for="product in products" :key="product.id"
                                            @mouseenter="activeProduct = product"
                                            :class="activeProduct.id == product.id ? 'bg-dense' : ''">
                                            <router-link
                                                class="relative flex items-center px-2 py-1 my-1 rounded-md cursor-pointer hover:bg-gray-1"    
                                                :to="{name : 'RootCategoryPage' , params : {rootCategory : product.slug}}">
                                                <img class="w-[24px] h-[24px] mr-2" :src="product.icon" alt="" />
                                                <PopoverButton class="text-left">{{ product.name }}</PopoverButton>
                                                <span style="position: absolute; right: 3px" class="material-icons-outlined">chevron_right</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                    <ul class="w-[53%] bg p-4">
                                        <li class="flex items-center px-2 py-1 my-1 rounded-md hover:bg-dense"
                                            v-for="category in activeProduct.categories" :key="category.id">
                                            <img class="w-[24px] h-[24px] mr-2" :src="category.icon" alt="" />
                                            <router-link :to="{name : 'CategoryPage' , params : {rootCategory : activeProduct.slug , category : category.slug}}">
                                                <PopoverButton class="text-left">
                                                    {{ category.name }}
                                                </PopoverButton>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>

                    <!-- Resources -->
                    <Popover v-slot="{ open }" class="relative">
                        <PopoverButton :class="open ? 'text-secondary' : 'text-white hover:text-secondary'
                            "
                            class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none">
                            <span class="mr-1">Resources</span>
                            <span class="material-icons-outlined">expand_more</span>
                        </PopoverButton>

                        <transition enter-active-class="transition duration-200 ease-out"
                            enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                            <PopoverPanel
                                class="absolute z-50 w-screen max-w-sm mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl">
                                <div class="z-50 p-4 overflow-hidden bg-black rounded-lg shadow-lg">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Rerum, veniam iure ex deserunt delectus architecto sint?
                                    Quaerat veniam, dicta delectus deserunt voluptatum magni omnis
                                    numquam, modi vitae fugit ex temporibus?
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                </PopoverGroup>

                <div class="my-auto font-medium h-fit">
                    <router-link :to="{ name: 'AboutPage' }" class="ml-2 hover:text-secondary">About Us</router-link>
                    <router-link :to="{ name: 'ContactPage' }" class="ml-6 hover:text-secondary">Contact Us</router-link>
                </div>
            </div>

            <div>
                <button class="flex items-center">
                    <span class="material-icons-outlined">search</span>
                </button>
            </div>
        </div>

        <div class="flex sm:hidden justify-between w-full p-2 bg-[#0a0a0a] sm:px-8">
            <h1 class="text-xl italic font-bold">
                <router-link to="/">FIRST ICT</router-link>
            </h1>
            <button id="menuBtn" class="sm:hidden" @click="moblieView = !moblieView">
                <span id="menuSpan" class="material-icons-outlined">menu</span>
            </button>
        </div>

        <TransitionRoot appear :show="moblieView" as="template">
            <Dialog as="div" @close="moblieView = false" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex items-center justify-start min-h-screen text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 left-1/2"
                            enter-to="opacity-100 left-0" leave="duration-200 ease-in" leave-from="opacity-100 left-0"
                            leave-to="opacity-0 left-1/2">
                            <DialogPanel class="max-w-md min-w-[250px] min-h-screen py-6 px-2 overflow-hidden text-left align-middle transition-all transform bg-coal text-white shadow-xl w-fit">
                                <div>
                                    <router-link :to="{ name: 'IndexPage' }" class="text-2xl italic font-bold">First ICT</router-link>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

    </div>
</template>

<script>
import ApiService from "@/services/ApiService";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverGroup,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from "@headlessui/vue";
export default {
    components: { Popover, PopoverButton, PopoverPanel, PopoverGroup , TransitionRoot, TransitionChild, Dialog, DialogPanel },
    data() {
        return {
            moblieView: false,
            solutions: [],
            products: [],
            resources: [],
            activeSolution: {},
            activeProduct: {},
        };
    },
    methods: {
        getRootCategories() {
            ApiService.get("/root-categories")
                .then((res) => {
                    res.data.data.forEach((c) => {
                        if (c.type == "solutions") {
                            this.solutions.push(c);
                        } else if (c.type == "products") {
                            this.products.push(c);
                        } else {
                            this.resources.push(c);
                        }
                    });
                    this.activeSolution = this.solutions[0];
                    this.activeProduct = this.products[0];
                })
                .catch((res) => {
                    console.log(res);
                });
        },
    },
    mounted() {
        this.getRootCategories();
    },
};
</script>

<style scoped>
.bg {
    background-image: url("@/assets/macbook.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
