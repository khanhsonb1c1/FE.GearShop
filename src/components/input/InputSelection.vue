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
import { categoryStore } from "../../store/category";
import { companyStore } from "../../store/company";
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

    nameList: {
      type: String,
    },
  },

  data() {
    return {
      model: "" as string,
      list: [
        {
          name: "" as string,
          _id: "" as string,
        },
      ],
    };
  },

  mounted() {
    if (this.nameList == "category") {
      this.list = this.categories;
    }
    if (this.nameList == "company") {
      this.list = this.company_list;
    }
  },

  computed: {
    categories() {
      return categoryStore().category_list;
    },

    company_list() {
      return companyStore().company_list;
    },
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
