<template>
  <div>
    <div class="sm:flex hidden items-center justify-around py-2 bg-[#0a0a0a]">
      <div class="pr-12">
        <router-link :to="{ name: 'IndexPage' }" class="text-xl italic"
          >First ICT</router-link
        >
      </div>

      <div class="flex pl-12">
        <PopoverGroup class="flex">
          <!-- Solutions -->
          <Popover v-slot="{ open }" class="relative">
            <PopoverButton
              :class="
                open ? 'text-secondary' : 'text-white hover:text-secondary'
              "
              class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none"
            >
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
              <PopoverPanel
                class="absolute z-50 w-screen max-w-lg mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-2xl"
              >
                <div
                  class="z-50 flex justify-between overflow-hidden text-sm rounded shadow-lg bg-coal"
                >
                  <ul class="w-[45%] list-none p-4">
                    <li
                      v-for="solution in solutions"
                      :key="solution.id"
                      @mouseenter="activeSolution = solution"
                      :class="
                        activeSolution.id == solution.id ? 'bg-dense' : ''
                      "
                    >
                      <div
                        class="relative flex items-center px-2 py-1 my-1 rounded-md cursor-pointer hover:bg-gray-1"
                        :to="{
                          name: 'RootCategoryPage',
                          params: { rootCategory: solution.slug },
                        }"
                      >
                        <img
                          class="w-[24px] h-[24px] mr-2"
                          :src="solution.icon"
                          alt=""
                        />
                        <PopoverButton class="text-left">{{
                          solution.name
                        }}</PopoverButton>
                        <span
                          style="position: absolute; right: 3px"
                          class="material-icons-outlined"
                          >chevron_right</span
                        >
                      </div>
                    </li>
                  </ul>
                  <ul class="w-[53%] list-none bg p-4">
                    <li
                      v-for="category in activeSolution.categories"
                      :key="category.id"
                      class="flex items-center px-2 py-1 my-1 rounded hover:bg-dense"
                    >
                      <img
                        class="w-[24px] h-[24px] mr-2"
                        :src="category.icon"
                        alt=""
                      />
                      <router-link
                        :to="{
                          name: 'CategoryPage',
                          params: {
                            rootCategory: activeSolution.slug,
                            category: category.slug,
                          },
                        }"
                      >
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
            <PopoverButton
              :class="
                open ? 'text-secondary' : 'text-white hover:text-secondary'
              "
              class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none"
            >
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
              <PopoverPanel
                class="absolute z-50 w-screen max-w-lg mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl"
              >
                <div
                  class="z-50 flex justify-between overflow-hidden text-sm rounded shadow-lg bg-coal"
                >
                  <ul class="w-[45%] list-none p-4">
                    <li
                      v-for="product in products"
                      :key="product.id"
                      @mouseenter="activeProduct = product"
                      :class="activeProduct.id == product.id ? 'bg-dense' : ''"
                    >
                      <div
                        class="relative flex items-center px-2 py-1 my-1 rounded-md cursor-pointer hover:bg-gray-1"
                        :to="{
                          name: 'RootCategoryPage',
                          params: { rootCategory: product.slug },
                        }"
                      >
                        <img
                          class="w-[24px] h-[24px] mr-2"
                          :src="product.icon"
                          alt=""
                        />
                        <PopoverButton class="text-left">{{
                          product.name
                        }}</PopoverButton>
                        <span
                          style="position: absolute; right: 3px"
                          class="material-icons-outlined"
                          >chevron_right</span
                        >
                      </div>
                    </li>
                  </ul>
                  <ul class="w-[53%] list-none bg p-4">
                    <li
                      class="flex items-center px-2 py-1 my-1 rounded hover:bg-dense"
                      v-for="category in activeProduct.categories"
                      :key="category.id"
                    >
                      <img
                        class="w-[24px] h-[24px] mr-2"
                        :src="category.icon"
                        alt=""
                      />
                      <router-link
                        :to="{
                          name: 'CategoryPage',
                          params: {
                            rootCategory: activeProduct.slug,
                            category: category.slug,
                          },
                        }"
                      >
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
            <PopoverButton
              :class="
                open ? 'text-secondary' : 'text-white hover:text-secondary'
              "
              class="inline-flex items-center px-3 py-2 font-medium outline-none focus:ring-0 focus:outline-none"
            >
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
              <PopoverPanel
                class="absolute z-50 w-screen max-w-sm mt-3 transform -translate-x-1/2 left-1/2 lg:max-w-3xl"
              >
                <div
                  class="z-50 max-w-lg p-1 overflow-hidden bg-black rounded-lg shadow-lg bg"
                >
                  <ul class="flex flex-wrap w-full p-1 list-none">
                    <li
                      v-for="r in res"
                      :key="r.name"
                      class="relative flex items-center w-1/2 px-2 py-1 my-1 rounded cursor-pointer hover:text-secondary drop-shadow-lg"
                    >
                      <span class="material-icons-outlined">{{ r.icon }}</span>
                      <router-link :to="{ name: r.page }" class="ml-1">
                        {{ r.name }}
                      </router-link>
                    </li>
                    <li
                      class="relative flex items-center w-1/2 px-2 py-1 my-1 rounded cursor-pointer hover:text-secondary drop-shadow-lg"
                    >
                      <span class="material-icons-outlined">play_circle</span>
                      <a
                        href="https://www.youtube.com"
                        target="_blank"
                        class="ml-1"
                        >Videos</a
                      >
                    </li>
                  </ul>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>

        <div class="my-auto font-medium h-fit">
          <router-link
            :to="{ name: 'AboutPage' }"
            class="ml-2 hover:text-secondary"
            >About Us</router-link
          >
          <router-link
            :to="{ name: 'ContactPage' }"
            class="ml-6 hover:text-secondary"
            >Contact Us</router-link
          >
        </div>
      </div>

      <div class="flex items-center gap-6">
        <button @click="showSearchBox = !showSearchBox" class="flex items-center">
          <span class="material-icons-round">search</span>
        </button>
        <button class="px-3 py-1 text-2xl uppercase rounded-full bg-primary" @click="verifyLogin" v-if="authStore.user && authStore.user.id">{{ authStore.user.name[0] }}</button>
        <button v-else @click="showLogin = true" class="flex items-center">
          <span class="material-icons-round">person</span>
        </button>
      </div>
    </div>

    <SearchBox class="z-50" :isOpen="showSearchBox" @close="showSearchBox = false" />

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
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-start min-h-screen text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 left-1/2"
              enter-to="opacity-100 left-0"
              leave="duration-200 ease-in"
              leave-from="opacity-100 left-0"
              leave-to="opacity-0 left-1/2"
            >
              <DialogPanel
                class="max-w-md min-w-[250px] min-h-screen py-6 px-2 overflow-hidden text-left align-middle transition-all transform bg-coal text-white shadow-xl w-fit"
              >
                <div>
                  <router-link
                    :to="{ name: 'IndexPage' }"
                    class="text-2xl italic font-bold"
                    >First ICT</router-link
                  >
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
import SearchBox from "@/components/public/SearchBox.vue";
import {useAuthStore} from '@/stores/auth'
import MainModal from '@/components/auth/MainModal.vue'
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverGroup,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    SearchBox,
    MainModal
  },
  data() {
    return {
      authStore : useAuthStore(),
      showSearchBox : false,
      moblieView: false,
      showLogin : false,
      solutions: [],
      products: [],
      resources: [],
      activeSolution: {},
      activeProduct: {},
      res: [
        {
          name: "Blog",
          page: "IndexPage",
          icon: "content_copy",
        },
        {
          name: "Training",
          page: "IndexPage",
          icon: "model_training",
        },
        {
          name: "Technical Paper",
          page: "IndexPage",
          icon: "description",
        },
        {
          name: "Webinars",
          page: "IndexPage",
          icon: "videocam",
        },
      ],
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
    async verifyLogin() {
      let token = localStorage.getItem('token');
      if (token) {
        if (this.authStore.user && this.authStore.user.email) {
          this.authStore.filterRole();
          if (this.authStore.isAdmin) {
            this.$router.push({name : 'AdminDashboardPage'})
          } else {
            alert('customer');
          }
        }
      } else {
        this.$router.push({name : 'LoginPage'})
      }
    }
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
