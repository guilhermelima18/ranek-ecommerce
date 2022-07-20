<template>
  <section class="max-w-5xl mx-auto">
    <transition mode="out-in">
      <div v-if="loading" key="carregando">
        <Loading />
      </div>
      <div
        class="w-full grid grid-cols-3 gap-6"
        v-else-if="produtos.length > 0"
        key="produtos"
      >
        <div
          class="bg-white shadow shadow-[rgba(30, 60, 90, 0.1)] p-2 rounded transition-all duration-200 hover:shadow-lg hover:shadow-[rgba(30, 60, 90, 0.2)] hover:scale-110 hover:relative hover:z-10"
          v-for="produto in produtos"
          :key="produto.id"
        >
          <router-link :to="`/produto/${produto.id}`">
            <img
              class="rounded mb-5"
              v-if="produto.fotos.length > 0"
              :src="produto.fotos[0].src"
              :alt="produto.fotos[0].titulo"
            />
            <p class="text-orange-600 font-bold">{{ produto.preco }}</p>
            <h2 class="mb-3">{{ produto.nome }}</h2>
            <p>{{ produto.descricao }}</p>
          </router-link>
        </div>
      </div>

      <div class="text-center" v-else key="sem-resultados">
        <p>Busca sem resultados. Tente buscar por um outro termo.</p>
      </div>
    </transition>
    <div class="flex justify-center mt-20">
      <Pagination
        :totalProducts="totalProducts"
        :productsPerPage="productsPerPage"
      />
    </div>
  </section>
</template>

<script type="module">
import { useGetProdutos } from "../services/useGetProdutos";
import Pagination from "./Pagination.vue";
import Loading from "./Loading.vue";
import { formatPrice } from "../helpers/formatPrice";
import { serializeUrl } from "../helpers/serializeUrl";

const { getProdutos } = useGetProdutos();

export default {
  name: "ProdutosLista",
  components: {
    Pagination,
    Loading,
  },
  data() {
    return {
      produtos: [],
      totalProducts: 0,
      productsPerPage: 9,
      loading: false,
    };
  },
  computed: {
    getUrl() {
      const url = serializeUrl(this.$route.query);

      return url;
    },
  },
  methods: {
    async fetchProdutos() {
      this.loading = true;

      const params = {
        queryUrl: this.getUrl,
        perPage: this.productsPerPage,
      };

      const resp = await getProdutos(params);

      if (resp) {
        if (resp.status === 200) {
          const formattedProducts = resp.data.map((product) => ({
            ...product,
            preco: formatPrice(product.preco),
          }));

          this.produtos = formattedProducts;
          this.totalProducts = Number(resp.headers["x-total-count"]);
          this.loading = false;
        }
      }
    },
  },
  created() {
    this.fetchProdutos();
  },
  watch: {
    getUrl() {
      this.fetchProdutos();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
