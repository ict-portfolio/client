<template>
  <form @submit.prevent="register" class="relative w-full text-gray-1">
    <h1 class="pb-4 text-3xl italic font-semibold text-center text-primary">
      FIRST ICT
    </h1>
    <BaseInput
        v-model="user.name"
        :error="errors.name"
        class="w-full"
        type="text"
        :label="'Name'" />
    <BaseInput
      v-model="user.email"
      class="w-full"
      type="email"
      :label="'Email'"
      :error="errors.email"
    />
    <BaseInput
      v-model="user.password"
      class="w-full"
      type="password"
      :label="'Password'"
      :error="errors.password"
    />
    <BaseInput
      v-model="user.password_confirmation"
      :error="errors.password_confirmation"
      class="w-full"
      type="password"
      :label="'Confirm Password'"
    />
    <button class="w-full px-6 py-2 text-white rounded bg-primary h-fit">
      sign up
    </button>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import ApiService from "@/services/ApiService";
import TokenService from "@/services/TokenService";
import {useAuthStore} from '@/stores/auth'
export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      authStore : useAuthStore(),
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors : {},
    };
  },
  methods : {
    register() {
      ApiService.post("/register", this.user)
        .then((res) => {
          TokenService.setToken(res.data.data.token);
          this.authStore.user = res.data.data.user;
          this.$emit('success');
        })
        .catch((res) => {
          if (res.response && res.response.data && res.response.data.errors) {
            this.errors = res.response.data.errors;
          } else {
            this.errors = { main: "Internal Error !" };
          }
          setTimeout(() => {
            this.errors = {};
          }, 3000);
        });
    },
  }
};
</script>

<style scoped>
</style>