<template>
  <form class="w-full flex flex-col gap-5">
    <div class="">
      <label for="nome">Nome</label>
      <InputDefault
        inputType="text"
        inputName="nome"
        inputId="nome"
        v-model="createUser.name"
      />
    </div>
    <div>
      <label for="email">E-mail</label>
      <InputDefault
        inputType="email"
        inputName="email"
        inputId="email"
        v-model="createUser.email"
      />
    </div>
    <div>
      <label for="senha">Senha</label>
      <InputDefault
        inputType="password"
        inputName="senha"
        inputId="senha"
        v-model="createUser.password"
      />
    </div>
    <div>
      <label for="cep">CEP</label>
      <InputDefault
        inputType="text"
        inputName="cep"
        inputId="cep"
        v-model="createUser.cep"
      />
    </div>
    <div>
      <label for="rua">Rua</label>
      <InputDefault
        inputType="text"
        inputName="rua"
        inputId="rua"
        v-model="createUser.road"
      />
    </div>
    <div>
      <label for="numero">Número</label>
      <InputDefault
        inputType="text"
        inputName="numero"
        inputId="numero"
        v-model="createUser.number"
      />
    </div>
    <div>
      <label for="bairro">Bairro</label>
      <InputDefault
        inputType="text"
        inputName="bairro"
        inputId="bairro"
        v-model="createUser.district"
      />
    </div>
    <div>
      <label for="cidade">Cidade</label>
      <InputDefault
        inputType="text"
        inputName="cidade"
        inputId="cidade"
        v-model="createUser.city"
      />
    </div>
    <div>
      <label for="estado">Estado</label>
      <InputDefault
        inputType="text"
        inputName="estado"
        inputId="estado"
        v-model="createUser.state"
      />
    </div>
    <div>
      <slot />
    </div>
  </form>
</template>

<script>
import InputDefault from "../components/InputDefault.vue";

export default {
  name: "Form",
  components: {
    InputDefault,
  },
  data() {
    return {
      createUser: {
        name: "",
        email: "",
        password: "",
        cep: "",
        road: "",
        number: "",
        district: "",
        city: "",
        state: "",
      },
    };
  },
};
</script>
