<template>
  <section>
    <div v-if="loading">
      <Loading />
    </div>
    <div class="produto" v-else>
      <ul>
        <li v-for="(item, key) in produto" :key="key">
          <img :src="item.src" :alt="item.nome" />
        </li>
      </ul>
      <div>
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <Button
          class="btn"
          v-if="produto.vendido === false"
          buttonText="Comprar"
        />
        <Button
          class="btn"
          v-else
          buttonText="Produto vendido"
          :isDisabled="true"
        />
      </div>
    </div>
  </section>
</template>

<script type="module">
import Loading from "../components/Loading.vue";
import Button from "../components/Button.vue";
import { formatPrice } from "../helpers/formatPrice";
import { useGetProdutos } from "../services/useGetProdutos";

const { getProduto } = useGetProdutos();

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

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 50px;
}
</style>
