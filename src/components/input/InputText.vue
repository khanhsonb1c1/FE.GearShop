<template>
  <div class="input-style-1">
    <label>{{ title }}</label>
    <input type="text" :placeholder="placeholder" v-model="model" />
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
