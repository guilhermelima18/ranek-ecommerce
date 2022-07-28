import { createStore } from "vuex";
import { api } from "../services/api";

const store = createStore({
  state() {
    return {
      login: false,
      user: {
        id: "",
        nome: "",
        email: "",
        senha: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
      },
    };
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUser(context, payload) {
      const response = await api.get(`/usuario/${payload}`);

      context.commit("UPDATE_USER", response.data);
      context.commit("UPDATE_LOGIN", true);
    },
  },
});

export default store;
