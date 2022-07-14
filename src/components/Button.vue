<template>
  <button
    class="block px-8 py-3 bg-purple-600 rounded text-center text-base shadow shadow-[rgba(30, 60, 90, 0.2)] text-white transition-all duration-500 cursor-pointer hover:bg-purple-700 hover:scale-110"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: String,
  },
};
</script>
