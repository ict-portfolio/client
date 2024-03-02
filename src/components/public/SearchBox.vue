<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex items-center justify-center min-h-full text-center"
        >
          <TransitionChild
            as="template"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-[-3rem]"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-[-3rem]"
          >
            <DialogPanel
              class="w-screen p-0 absolute top-0 overflow-hidden text-left align-middle transition-all transform bg-[#eee] shadow-xl min-h-[20vh]"
            >
                <button class="absolute text-xl outline-none sm:top-6 sm:right-6 top-2 right-2 ring-0" @click="closeModal">
                  <span class="material-icons-outlined">close</span>
                </button>
                <h1 class="mt-6 text-lg font-bold text-center sm:text-3xl text-gray-1">What are You Looking for?</h1>
                <form @submit.prevent="goGoGo" class="flex justify-center py-4">
                    <input
                        v-model="keyword"
                        placeholder="Search products and services in First ICT"
                        type="text"
                        class="sm:h-12 h-8 placeholder:text-sm px-2 bg-[#ffffff] border outline-none rounded-l-md placeholder-primary sm:w-2/3 md:w-1/2 border-primary focus:ring-0">
                    <button class="flex items-center justify-center w-8 h-8 text-white sm:w-12 sm:h-12 rounded-r-md bg-primary">
                        <span class="material-icons-outlined">search</span>
                    </button>
                </form>
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
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    }
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
  },
  data () {
    return {
        keyword : this.$route.query.query,
    }
  },
  methods : {
    closeModal () {
        this.$emit('close')
    },
    goGoGo() {
      this.closeModal();
      this.$router.push({name : "SearchResult" , query : {query : this.keyword}})
    }
  }
};
</script>

<style scoped>
</style>