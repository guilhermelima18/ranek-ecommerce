<template>
  <Layout>
    <section>
      <h1 class="text-3xl text-purple-600 text-center mt-10">
        👍Compre ou Venda👎
      </h1>
      <ProdutosBuscar />
      <ProdutosLista />
    </section>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import ProdutosBuscar from "../components/ProdutosBuscar.vue";
import ProdutosLista from "../components/ProdutosLista.vue";

export default {
  name: "Home",
  components: {
    Layout,
    ProdutosBuscar,
    ProdutosLista,
  },
  data() {
    return {
      message: "Olá, mundo!",
    };
  },
};
</script>
