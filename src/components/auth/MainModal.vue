<template>
  <TransitionRoot appear :show="show" as="template">
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
            <span @click="closeModal" style="position: absolute; top : 10px ; right : 10px;color : rgb(29, 24, 24);cursor: pointer;" class="material-icons-round">cancel</span>
              <RegisterModal @success="closeModal" v-if="showRegister" />
              <LoginModal @success="closeModal" v-else />
              <p class="my-6 text-center" v-if="showRegister">
                Already have an account?
                <button class="m-2 text-secondary" @click="showRegister = false">Sign In</button>
              </p>
              <p class="my-6 text-center" v-else>
                Doesn't have an account?
                <button class="m-2 text-secondary" @click="showRegister = true">Sign Up</button>
              </p>
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
import LoginModal from "@/components/auth/LoginModal.vue";
import RegisterModal from '@/components/auth/RegisterModal.vue';
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    LoginModal,
    RegisterModal
  },
  props: {
    show: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      showRegister: false,
    };
  },
  methods: {
    closeModal () {
        this.$emit('close')
    }
  },
};
</script>

<style scoped>
</style>