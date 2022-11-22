<template>
  <div class="input-style-1">
    <label>{{ title }}</label>
    <p>{{ value }}</p>
  </div>

  <!-- end input -->
  <!-- <div class="input-style-2">
      <input type="text" placeholder="Full Name" />
      <span class="icon"> <i class="lni lni-user"></i> </span>
    </div>
    
    <div class="input-style-3">
      <input type="text" placeholder="Full Name" />
      <span class="icon"><i class="lni lni-user"></i></span>
    </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      requied: true,
      default: "",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
