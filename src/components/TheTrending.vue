<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Siêu khuyến mãi</h2>
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
export default defineComponent({
  data() {
    return {
      last_page: 0 as number,
      page: 1 as number,
      product_list: [
        {
          _id: "" as string,
          product_id: "" as string,
          name: "" as string,
          price: 0 as number,
          category: {
            name: "" as string,
          },
          imageUrl: "" as string,
          company: {
            name: "" as string,
          },
        },
      ],
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      product
        .get_all(1, "-sale", "", "")
        .then((res) => {
          this.product_list = res.data.data;
          this.last_page = this.last_page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { ProductItem },
});
</script>

<style></style>
