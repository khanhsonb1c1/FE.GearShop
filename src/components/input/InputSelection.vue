<template>
  <div class="select-style-1">
    <label>{{ title }}</label>
    <div class="select-position">
      <select v-model="model">
        <option v-for="(item, index) in list" :key="index" :value="item._id">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
  <!-- end select -->
  <!-- <div class="select-style-2">
      <div class="select-position">
        <select>
          <option value="">Select category</option>
          <option value="">Category one</option>
          <option value="">Category two</option>
          <option value="">Category three</option>
        </select>
      </div>
    </div> -->
  <!-- end select -->
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
    list: {
      type: Array,
      requied: true,
    },
    value: {
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
