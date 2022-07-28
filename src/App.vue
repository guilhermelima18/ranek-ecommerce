<template>
  <Header />
  <main class="flex-1">
    <transition mode="out-in">
      <router-view />
    </transition>
  </main>
  <Footer />
</template>

<script type="module">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
