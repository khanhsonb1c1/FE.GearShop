<template>
  <div class="input-style-1">
    <label>{{ title }}</label>
    <textarea :placeholder="placeholder" rows="5" v-model="model"></textarea>
  </div>
  <!-- end textarea -->
  <!-- <div class="input-style-3">
    <textarea placeholder="Message" rows="5"></textarea>
    <span class="icon"><i class="lni lni-text-format"></i></span>
  </div> -->
  <!-- end textarea -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
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
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },

  data() {
    return {
      model: "" as string,
    };
  },

  watch: {
    value() {
      this.model = this.value;
    },
    model: _.debounce(function (this: any, value: string) {
      this.getDe(value);
    }, 200),
  },

  methods: {
    getDe(value: string) {
      this.$emit("update:value", value);
    },
  },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
