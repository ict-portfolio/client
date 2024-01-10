<template>
  <div class="sm:flex hidden items-center justify-around py-2 bg-[#0a0a0a]">
    <div class="pr-12">
      <router-link :to="{ name: 'IndexPage' }" class="text-xl italic">First ICT</router-link>
    </div>

    <div class="flex pl-12">
    <PopoverGroup class="flex">
                        <!-- Solutions -->
        <Popover v-slot="{ open }" class="relative">
        <PopoverButton :class="open ? 'text-secondary' : 'text-white'" class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none">
            <span class="mr-1">Solutions</span>
            <span class="material-icons-outlined">expand_more</span>
        </PopoverButton>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel class="absolute z-50 w-screen max-w-sm mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl">
            <div class="z-50 p-4 overflow-hidden rounded-lg shadow-lg bg-coal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magnam autem maxime nesciunt quod libero eius officia temporibus ab suscipit expedita, exercitationem minus laborum repellendus corporis eveniet est natus ipsa.
            </div>
            </PopoverPanel>
        </transition>
        </Popover>
        
                        <!-- Products -->
        <Popover v-slot="{ open }" class="relative">
            <PopoverButton :class="open ? 'text-secondary' : 'text-white'" class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none">
                <span class="mr-1">Products</span>
                <span class="material-icons-outlined">expand_more</span>
            </PopoverButton>

            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
            >
                <PopoverPanel class="absolute z-50 w-screen max-w-sm mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl">
                <div class="z-50 p-4 overflow-hidden rounded-lg shadow-lg bg-dense">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non facere, magnam iure delectus eum ab nisi in perferendis totam aut possimus autem sit et quidem enim, tempora eos, labore iusto.
                </div>
                </PopoverPanel>
            </transition>
        </Popover>

                                <!-- Resources -->
        <Popover v-slot="{ open }" class="relative">
            <PopoverButton :class="open ? 'text-secondary' : 'text-white'" class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none">
                <span class="mr-1">Resources</span>
                <span class="material-icons-outlined">expand_more</span>
            </PopoverButton>

            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-1 opacity-0"
            >
                <PopoverPanel class="absolute z-50 w-screen max-w-sm mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl">
                <div class="z-50 p-4 overflow-hidden bg-black rounded-lg shadow-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, veniam iure ex deserunt delectus architecto sint? Quaerat veniam, dicta delectus deserunt voluptatum magni omnis numquam, modi vitae fugit ex temporibus?
                </div>
                </PopoverPanel>
            </transition>
        </Popover>

    </PopoverGroup>
    <div class="my-auto font-medium h-fit">
        <button class="ml-2">About Us</button>
        <button class="ml-6">Contact Us</button>
    </div>
    </div>

    <div>
        <button class="flex items-center">
            <span class="material-icons-outlined">search</span>
        </button>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel , PopoverGroup } from '@headlessui/vue'
export default {
    components : {Popover , PopoverButton , PopoverPanel , PopoverGroup},
  data() {
    return {

    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
</style>