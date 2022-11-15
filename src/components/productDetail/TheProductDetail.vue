<template>
  <ProductSlide :product="product" />
  <ProductReview />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { product } from "../../service/product";
import ProductReview from "./ProductReview.vue";
import ProductSlide from "./ProductSlide.vue";

export default defineComponent({
  data() {
    return {
      product: {
        name: "" as string,
        price: 0 as number,
        sale: 0 as number,
        category: {
          name: "" as string,
        },
        imageUrl: "" as string,
      },
      id: "" as any,
    };
  },

  created() {
    this.getDetailProduct();
  },

  methods: {
    getDetailProduct() {
      this.id = this.$route.params.id;
      return product
        .get_detail(this.id)
        .then((res) => {
          this.product = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  components: { ProductReview, ProductSlide },
});
</script>
