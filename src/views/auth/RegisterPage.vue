<template>
  <div
    class="flex items-center justify-center w-screen h-screen p-2 background"
  >
    <form
      @submit.prevent="register"
      class="relative sm:px-6 px-2 w-full py-10 bg-[#EFF2F3] rounded shadow-lg text-gray-1 md:w-[30%] sm:w-1/2"
    >
      <span
        @click="$router.go(-1)"
        style="
          cursor: pointer;
          position: absolute;
          top: 15px;
          left: 10px;
          font-weight: 900;
          color: #3b3b3b;
        "
        class="material-icons-sharp"
        >keyboard_backspace</span
      >
      <h1 class="pb-4 text-3xl italic font-semibold text-center text-primary">
        FIRST ICT
      </h1>
      <BaseInput
        :error="errors.name"
        v-model="user.name"
        class="w-full"
        type="text"
        :label="'Name'"
      />
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
      <BaseInput
        :error="errors.password_confirmation"
        v-model="user.password_confirmation"
        class="w-full"
        type="password"
        :label="'Confirm Password'"
      />
      <button class="w-full px-6 py-2 text-white rounded bg-primary h-fit">
        sign in
      </button>
      <p class="my-6 text-center">
        Already have an account?
        <router-link class="m-2 text-secondary" :to="{ name: 'LoginPage' }"
          >Sign In</router-link
        >
      </p>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import ApiService from "@/services/ApiService";
import TokenService from "@/services/TokenService";
export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    register() {
      ApiService.post("/register", this.user)
        .then((res) => {
          TokenService.setToken(res.data.data.token);
          let author = res.data.data.user.roles.find((role) => role.name == 'admin')
          if (author && author.id) {
            this.$router.push('/admin')
          } else {
            this.$router.go(-1);
          }
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
.background {
  background-image: url("@/assets/buildings.jpg");
  background-size: cover;
}
</style>