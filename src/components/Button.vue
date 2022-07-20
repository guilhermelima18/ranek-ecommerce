<template>
  <button
    v-if="isDisabled === false"
    class="block px-8 py-3 bg-purple-600 rounded text-center text-base shadow shadow-[rgba(30, 60, 90, 0.2)] text-white transition-all duration-500 cursor-pointer hover:bg-purple-700 hover:scale-110"
  >
    {{ buttonText }}
  </button>
  <button
    v-else
    class="block px-8 py-3 bg-purple-600 rounded text-center text-base shadow shadow-[rgba(30, 60, 90, 0.2)] text-white cursor-not-allowed opacity-50"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String,
    isDisabled: Boolean,
  },
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.disabled:hover {
  transform: scale(1);
}
</style>
