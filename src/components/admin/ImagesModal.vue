<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
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
        <div
          class="flex items-center justify-center min-h-full p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-2xl p-6 max-h-[600px] overflow-scroll text-left align-middle transition-all transform bg-white shadow-xl rounded-xl"
            >
                <div class="grid max-h-full grid-cols-3 gap-3">
                    <img loading="lazy" @click="selectImage({id : image.id , url : image.url})" v-for="image in images" :key="image.id" :src="image.url" class="w-[200px] cursor-pointer hover:shadow-xl" alt="">
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
import ApiService from '@/services/ApiService'

    export default {
        components : {
            TransitionRoot,
            TransitionChild,
            Dialog,
            DialogPanel,
        },
        props : {
            isOpen : {
                type : Boolean,
                required : true
            }
        },
        data () {
            return {
                images : []
            }
        },
        methods : {
            selectImage (image) {
                this.$emit('selectImage' , image)
            },
            closeModal () {
                this.$emit('closeModal')
            },
            getImages () {
                ApiService.get(`admin/images?page=1`).then((res) => {
                    console.log(res.data.data.data);
                    this.images = res.data.data.data
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted () {
            this.getImages();
        }
    }
</script>

<style scoped>
</style>

<style scoped>
</style>