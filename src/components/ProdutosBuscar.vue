<template>
  <form>
    <input type="text" name="search" id="search" v-model="search" />
    <input type="submit" value="searchSubmit" @click.prevent="searchProducts" />
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",
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
