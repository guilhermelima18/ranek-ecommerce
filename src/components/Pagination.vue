<template>
  <div class="w-full flex items-center justify-between">
    <p>Total de Produtos: {{ totalProducts }}</p>
    <ul v-if="totalPages > 1">
      <li v-for="pagina in pageRange" :key="pagina">
        <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalProducts: {
      type: Number,
      default: 1,
    },
    productsPerPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page,
      };
    },
  },
  computed: {
    totalPages() {
      const total = this.totalProducts / this.productsPerPage;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
    pageRange() {
      const range = 4;
      const rangePage = Math.ceil(range / 2);
      const currentPage = Number(this.$route.query._page);
      const totalPages = this.totalPages;

      const pagesArray = [];

      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, currentPage - rangePage);
      pagesArray.splice(range, totalPages);

      return pagesArray;
    },
  },
};
</script>

<style scoped>
li {
  display: inline-block;
}

li a {
  padding: 15px 20px;
  border-radius: 2px;
  margin: 4px;
}

li a {
  background: gray;
}

.router-link-exact-active {
  background: #87f;
  color: white;
}
</style>
