<template>
    <TransitionRoot appear :show="show" as="template">
      <Dialog as="div" @close="closePopup" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-1000 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-500 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex items-center justify-center min-h-full p-1 text-center sm:p-4"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-75"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-75"
            >
              <DialogPanel
                class="w-full max-w-xl p-1 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:p-6"
              >
                <div class="relative">
                  <button @click="changeImg(index - 1)" class="absolute rounded-full w-8 h-8 bg-[#ffffff] shadow-xl flex items-center justify-center outline-none top-1/2 left-1 focus:ring-0">
                    <span class="material-icons-outlined">chevron_left</span>
                  </button>
                  <img class="rounded aspect-video" id="image" :src="images[index].image.url" alt="">
                  <button @click="changeImg(index + 1)" class="absolute rounded-full w-8 h-8 bg-[#ffffff] shadow-xl flex items-center justify-center outline-none top-1/2 right-1 focus:ring-0">
                    <span class="material-icons-outlined">chevron_right</span>
                  </button>
                </div>
                <div class="flex flex-wrap justify-center gap-1 mt-2">
                    <div @click="changeImg(i)" v-for="(img , i) in images" :key="img.id" class="my-2 border border-gray-2 rounded max-w-[10%]" :class="index == i ? 'p-[0.5px]' : 'p-1'">
                        <img v-if="index != i" :src="img.image.url" class=" aspect-[4/3] w-full" alt="">
                    </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
    export default {
        components: {
            TransitionRoot,
            TransitionChild,
            Dialog,
            DialogPanel,
        },
        props : {
            show : {
                type : Boolean,
                required : true,
                default : false
            },
            images : {
                type : Array,
                required : true
            },
            index : {
                type : Number,
                required : true,
                default : 0
            }
        },
        watch: {   
            index() {
                if (document.getElementById('image')) {
                    const img = document.getElementById('image');
                    img.classList.add('animate')
                    setTimeout(() => {
                        img.classList.remove('animate')
                    } , 500)
                }
            }
        },
        methods : {
            closePopup() {
                this.$emit('close');
            },
            changeImg (i) {
                if (i < this.$props.images.length && i >= 0) {
                  this.$emit('changeIndex' , i)
                }
            }
        }
    }
</script>

<style scoped>
.animate {
    animation: ani 0.5s ease-in-out;
}
@keyframes ani {
    from {
        transform: scale(0.8);
        opacity: 0.5;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>