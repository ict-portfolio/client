<template>
  <div class="min-h-screen">
    <div>
      <!-- demo btns ->
      <button class="mx-4" @click="showCreateForm = !showCreateForm">show create form</button>
      <button class="mx-4" @click="showEditForm = !showEditForm">show edit form</button> -->
      <RootCategoriesList @showRootUpdate="showUpdateRootForm" @showRootCreate="showCreateRootForm" v-if="indexTable" />
      <CreateRootCategory @reload="reloadPage" v-if="createRootForm" />
      <EditRootCategory :id="idForRootEdit" @reload="reloadPage" v-if="updateRootForm"></EditRootCategory>
    </div>

    <!-- create form -->
    <TransitionRoot appear :show="showCreateForm" as="template">
      <Dialog as="div" @close="closeCreateForm" class="relative z-50">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-full p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <CreateRootCategory />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- edit form -->
    <TransitionRoot appear :show="showEditForm" as="template">
      <Dialog as="div" @close="closeEditForm" class="relative z-50">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed top-0 left-0 w-screen h-screen bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-full p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <EditRootCategory />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import RootCategoriesList from "@/components/admin/root_categories/RootCategoriesList.vue";
import CreateRootCategory from "@/components/admin/root_categories/CreateRootCategory.vue";
import EditRootCategory from "@/components/admin/root_categories/EditRootCategory.vue";
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
    RootCategoriesList,
    CreateRootCategory,
    EditRootCategory,
},
  data() {
    return {
      showCreateForm: false,
      showEditForm: false,
      indexTable: true,
      createRootForm: false,
      updateRootForm: false,
      idForRootEdit: null
    };
  },
  methods: {
    closeCreateForm() {
      this.showCreateForm = false;
    },
    closeEditForm() {
      this.showEditForm = false;
    },
    reloadPage() {
      this.indexTable = true,
        this.createRootForm = this.updateRootForm = false
    },
    showCreateRootForm() {
      this.createRootForm = true;
      this.indexTable = this.updateRootForm = false;
    },
    showUpdateRootForm(id) {
      this.updateRootForm = true;
      this.indexTable = this.createRootForm = false;
      this.idForRootEdit = id;
    }
  },
};
</script>

<style scoped></style>