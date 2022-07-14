<template>
  <header class="bg-white w-full z-50">
    <nav
      class="w-full max-w-7xl mx-auto flex items-center justify-between p-5 shadow shadow-[rgba(30, 60, 90, 0.2)]"
    >
      <router-link to="/">
        <img class="w-20" src="../assets/ranek.svg" alt="Ranek" />
      </router-link>
      <router-link class="text-zinc-500" to="/login">
        <Button buttonText="Vender / Login" />
      </router-link>
    </nav>
  </header>
</template>

<script type="module">
import Button from "../components/Button.vue";

export default {
  name: "Header",
  components: {
    Button,
  },
};
</script>
