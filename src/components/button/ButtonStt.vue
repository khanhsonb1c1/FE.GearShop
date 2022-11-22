<template>
  <span class="button_stt" @click="handleClick()">
    {{ title }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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

<style scoped>
.button_stt {
  background: #fca901;
  border: 2px solid red;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
}
</style>
