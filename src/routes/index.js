import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Produto from "../pages/Produto.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/produto/:id",
    component: Produto,
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
