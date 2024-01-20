<template>
  <div class="min-h-screen">
    <h1 class="p-4 text-2xl">Categories</h1>
    <CategoriesView @showCreate="createForm = true" />
    <!-- create form -->
    <TransitionRoot appear :show="createForm" as="template">
      <Dialog as="div" @close="createForm = false" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
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
                class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <CreateCategory @reload="reloadPage" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import CreateCategory from "@/components/admin/categories/CreateCategory.vue";
import CategoriesView from "@/components/admin/categories/CategoriesView.vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
export default {
  components: {
    CreateCategory,
    CategoriesView,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
  },
  data() {
    return {
      createForm: false,
      indexTable: true,
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
</style>