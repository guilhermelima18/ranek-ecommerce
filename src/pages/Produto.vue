<template>
  <section>
    <div v-if="loading">
      <Loading />
    </div>
    <div class="" v-else>
      <ul>
        <li v-for="(item, key) in produto" :key="key">
          <img :src="item.src" :alt="item.nome" />
        </li>
      </ul>
      <div>
        <h1>{{ produto.nome }}</h1>
        <p>{{ produto.preco }}</p>
        <p>{{ produto.descricao }}</p>
        <Button v-if="produto.vendido" buttonText="Comprar" />
        <Button v-else buttonText="Produto vendido" :isDisabled="true" />
      </div>
    </div>
  </section>
</template>

<script type="module">
import Loading from "../components/Loading.vue";
import Button from "../components/Button.vue";
import { formatPrice } from "../helpers/formatPrice";
import { useGetProduto } from "../services/useGetProduto";

const { getProduto } = useGetProduto();

export default {
  name: "Produto",
  components: {
    Loading,
    Button,
  },
  data() {
    return {
      produto: {},
      loading: false,
    };
  },
  methods: {
    async fetchProduto(productId) {
      this.loading = true;

      if (productId) {
        const resp = await getProduto(productId);

        if (resp) {
          if (resp.status === 200) {
            console.log(resp);
            const productFormatted = {
              ...resp.data,
              preco: formatPrice(resp.data.preco),
            };

            this.produto = productFormatted;
            this.loading = false;
          }
        }
      }
    },
  },
  created() {
    this.fetchProduto(this.$route.params.id);
  },
};
</script>
