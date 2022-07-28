<template>
  <section>
    <h2 class="text-center text-2xl mt-10 mb-5">Crie a sua conta</h2>
    <transition>
      <Button
        class="w-full"
        v-if="!showForm"
        buttonText="Criar conta"
        @click="showForm = true"
      />
      <Form v-else>
        <Button class="w-full" buttonText="Criar usuário" />
      </Form>
    </transition>
  </section>
</template>

<script>
import Form from "../components/Form.vue";
import Button from "../components/Button.vue";

export default {
  name: "CreateAccount",
  components: {
    Form,
    Button,
  },
  data() {
    return {
      showForm: false,
    };
  },
};
</script>

<style scoped></style>
