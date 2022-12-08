<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Sản phẩm mới</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-12"
          v-for="(item, index) in product_list"
          :key="index"
        >
          <ProductItem :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { product } from "../service/product";
import ProductItem from "./product/ProductItem.vue";
import { productStore } from "../store/product";
export default defineComponent({
  data() {
    return {
      page: 1 as number,
    };
  },

  created() {
    this.getProducts();
  },

  computed: {
    product_list() {
      return productStore().product_list;
    },
  },

  methods: {
    getProducts() {
      productStore().getProductList(this.page, "created_at", "", "", "");
    },
  },

  components: { ProductItem },
});
</script>

<style></style>
