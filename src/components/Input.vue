<template>
  <input
    class="w-full shadow shadow-[rgba(30, 60, 90, 0.1)] p-5 border border-solid border-white rounded transition-all duration-300 focus:outline-none focus:scale-110 focus:shadow-lg focus:shadow-[rgba(30, 60, 90, 0.2)]"
    :type="inputType"
    :name="inputName"
    :id="inputId"
    v-model="search"
    :placeholder="inputPlaceholder"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    inputType: String,
    inputName: String,
    inputId: String,
    inputPlaceholder: String,
  },
};
</script>
