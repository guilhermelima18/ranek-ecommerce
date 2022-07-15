<template>
  <form class="max-w-xl mt-7 mx-auto mb-14 relative">
    <Input
      inputType="text"
      inputName="search"
      inputId="search"
      v-model="search"
      inputPlaceholder="Buscar..."
    />
    <button
      class="w-16 h-16 bg-[url('../assets/search.svg')] bg-no-repeat bg-center border-none cursor-pointer absolute top-0 right-0"
      type="submit"
      @click.prevent="searchProducts"
    />
  </form>
</template>

<script type="module">
import Input from "./Input.vue";

export default {
  name: "ProdutosBuscar",
  components: {
    Input,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchProducts() {
      this.$router.push({
        query: {
          q: this.search,
        },
      });

      this.search = "";
    },
  },
};
</script>
