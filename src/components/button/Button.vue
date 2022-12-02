<template>
  <button
    class="main-btn primary-btn btn-hover"
    style="width: 100%"
    @click="handleClick()"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button-component",
  props: {
    title: {
      type: String,
      requied: false,
      default: "Submit",
    },
  },

  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
  },
});
</script>
