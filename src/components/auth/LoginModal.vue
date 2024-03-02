<template>
  <form
    @submit.prevent="login"
    class="relative w-full text-gray-1"
  >
    <h1 class="pb-4 text-3xl italic font-semibold text-center text-primary">
      Login
    </h1>
    <p v-if="errors.main" class="p-4 text-center text-white bg-danger">
      {{ errors.main }}
    </p>
    <BaseInput
      :error="errors.email"
      v-model="user.email"
      class="w-full"
      type="email"
      :label="'Email'"
    />
    <BaseInput
      :error="errors.password"
      v-model="user.password"
      class="w-full"
      type="password"
      :label="'Password'"
    />
    <button class="w-full px-6 py-2 text-white rounded bg-primary h-fit">
      sign in
    </button>
  </form>
</template>

<script>
import ApiService from "@/services/ApiService";
import BaseInput from "@/components/base/BaseInput.vue";
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
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    login() {
      ApiService.post("/login", this.user)
        .then((res) => {
          TokenService.setToken(res.data.data.token);
          this.authStore.setAuth(res.data.data.user);
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
  },
};
</script>

<style scoped>
</style>