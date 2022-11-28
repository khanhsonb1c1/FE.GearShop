<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container" style="display: flex">
      <the-filter-menu />
      <div class="col-lg-9 col-md-6 col-12">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(item, index) in product_list"
            :key="index"
          >
            <ProductItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../store/category";
import { productStore } from "../../store/product";
import ProductItem from "./ProductItem.vue";
import TheFilterMenu from "./TheFilterMenu.vue";

export default defineComponent({
  data() {
    return {
      page: 1 as number,
    };
  },

  created() {
    this.getProducts();
    this.checkCate();
  },

  computed: {
    product_list() {
      return productStore().product_list;
    },

    categories() {
      return categoryStore().category_list;
    },
  },

  methods: {
    getProducts() {
      productStore().getProductList(this.page, "created_at", "", "");
    },

    checkCate() {
      if (categoryStore().category_list[0]._id == "") {
        this.getCategory();
      }
    },

    getCategory() {
      categoryStore()
        .getCategoryList()
        .then((res) => {
          console.log(res);
        });
    },
  },

  components: { ProductItem, TheFilterMenu },
});
</script>

<style></style>
