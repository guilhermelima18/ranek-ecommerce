<template>
  <section>
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos.length > 0"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <p>{{ produto.preco }}</p>
      <h2>{{ produto.nome }}</h2>
      <p>{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { useGetProdutos } from "../services/useGetProdutos";
import { formatPrice } from "../helpers/formatPrice";
import { serializeUrl } from "../helpers/serializeUrl";

const { getProdutos } = useGetProdutos();

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: [],
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
      const url = this.getUrl;
      const resp = await getProdutos(url);

      if (resp) {
        if (resp.status === 200) {
          const formattedProducts = resp.data.map((product) => ({
            ...product,
            preco: formatPrice(product.preco),
          }));

          this.produtos = formattedProducts;
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
    },
  },
};
</script>
