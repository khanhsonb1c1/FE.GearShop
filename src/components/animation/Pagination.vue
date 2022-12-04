<template>
  <ul class="pagination" style="display: flex; justify-content: center">
    <li class="page-item" @click="handleClick(1)">
      <a class="page-link">trang đầu</a>
    </li>
    <li class="page-item" v-if="lastBtn" @click="handleClick(current_page - 1)">
      <a class="page-link">{{ current_page - 1 }}</a>
    </li>
    <li class="page-item active">
      <a class="page-link"> {{ current_page }} </a>
    </li>
    <li class="page-item" @click="handleClick(current_page + 1)" v-if="nextBtn">
      <a class="page-link"> {{ current_page + 1 }}</a>
    </li>
    <li
      class="page-item"
      v-if="nextBtn2"
      @click="handleClick(current_page + 2)"
    >
      <a class="page-link"> {{ current_page + 2 }}</a>
    </li>
    <li class="page-item" @click="handleClick(last_page)">
      <a class="page-link">Trang cuối</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    current_page: {
      type: Number,
      default: 0,
      required: false,
    },
    last_page: {
      type: Number,
      default: 0,
      required: false,
    },
    page: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  data() {
    return {
      isDisableLast: true as boolean,
      isDisableNext: false as boolean,
      lastBtn: false as boolean,
      firstBtn: false as boolean,
      nextBtn: false as boolean,
      nextBtn2: false as boolean,
      pageValue: 0 as number,
    };
  },
  watch: {
    current_page() {
      this.checkPagination();
    },
    last_page() {
      this.checkPagination();
    },
    page() {
      this.checkPagination();
    },
    pageValue(page) {
      this.$emit("update:page", page);
    },
  },
  methods: {
    handleClick(value: number) {
      this.pageValue = value;
    },
    checkPagination() {
      if (this.current_page != 1) {
        this.isDisableLast = false;
      } else {
        this.isDisableLast = true;
      }
      if (this.last_page > this.current_page) {
        this.isDisableNext = false;
      }
      if (this.last_page == this.current_page) {
        this.isDisableNext = true;
      }
      if (this.current_page > 1) {
        this.lastBtn = true;
      } else {
        this.lastBtn = false;
      }
      if (this.last_page > this.current_page) {
        this.nextBtn = true;
      } else {
        this.nextBtn = false;
        this.nextBtn2 = false;
      }
      if (this.last_page - this.current_page > 1) {
        this.nextBtn2 = true;
      } else {
        this.nextBtn2 = false;
      }
    },
    // checkPagination(){
    // },
  },
  components: {},
});
</script>
