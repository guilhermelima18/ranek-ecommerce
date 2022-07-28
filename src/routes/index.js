import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Produto from "../pages/Produto.vue";
import Usuario from "../pages/Usuario/Usuario.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/produto/:id",
    component: Produto,
  },
  {
    path: "/usuario",
    component: Usuario,
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
