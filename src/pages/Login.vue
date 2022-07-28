<template>
  <section class="max-w-lg mx-auto p-5">
    <h1 class="text-center text-4xl text-indigo-600 mb-5">Login</h1>
    <form class="grid" @submit.prevent="onSubmitLogin">
      <div class="my-3">
        <label for="email" class="font-bold">E-mail</label>
        <InputDefault
          inputType="email"
          inputName="email"
          inputId="email"
          v-model="login.email"
        />
      </div>

      <div class="my-3">
        <label for="password" class="font-bold">Senha</label>
        <InputDefault
          inputType="password"
          inputName="password"
          inputId="password"
          v-model="login.password"
        />
      </div>
      <Button buttonText="Logar" class="mt-3" />
    </form>
    <p class="text-center mt-5 mx-auto hover:text-slate-500 hover:underline">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from "../components/CreateAccount.vue";
import InputDefault from "../components/InputDefault.vue";
import Button from "../components/Button.vue";

export default {
  name: "Login",
  components: {
    CreateLogin,
    InputDefault,
    Button,
  },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmitLogin() {
      this.$store.dispatch("getUser", this.login.email);
      this.$router.push("/usuario");
    },
  },
};
</script>
