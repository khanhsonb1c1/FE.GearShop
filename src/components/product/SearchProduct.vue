<template>
  <div class="col-lg-5 col-md-7 d-xs-none">
    <!-- Start Main Menu Search -->
    <div class="main-menu-search">
      <!-- navbar search start -->
      <div class="navbar-search search-style-5">
        <div class="search-select">
          <div class="select-position">
            <select id="select1">
              <option selected>Tìm kiếm</option>
            </select>
          </div>
        </div>
        <div class="search-input">
          <input type="text" placeholder="..." v-model="search" />
        </div>
        <div class="search-btn">
          <button>
            <i class="lni lni-search-alt" @click="handleSearch()"></i>
          </button>
        </div>
      </div>
      <!-- navbar search Ends -->
    </div>
    <!-- End Main Menu Search -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "../../store/product";

export default defineComponent({
  data() {
    return {
      search: "" as string,
    };
  },

  methods: {
    handleSearch() {
      productStore().updateFilter(this.search);
      this.$router.push({ path: "/product" });
    },
  },
});
</script>

<style></style>
