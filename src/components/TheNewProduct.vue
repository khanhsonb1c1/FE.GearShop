<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>New Product</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-12"
          v-for="(item, index) in product"
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
      product: [
        {
          _id: "" as string,
          product_id: "" as string,
          name: "" as string,
          price: 0 as number,
          category: {
            name: "" as string,
          },
          imageUrl: "" as string,
        },
      ],

      page: 1 as number,
      last_page: 0 as number,
    };
  },

  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      return product
        .get_all()
        .then((res) => {
          this.product = res.data.data;
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
