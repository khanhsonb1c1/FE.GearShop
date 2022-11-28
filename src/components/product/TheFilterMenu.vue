<template>
  <div class="col-lg-3 col-md-6 col-12">
    <div class="info-body">
      <h4>Danh mục</h4>
      <div class="">
        <ul class="" id="">
          <li class="" v-for="(item, index) in categories" :key="index">
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../store/category";
import { productStore } from "../../store/product";
import ProductItem from "./ProductItem.vue";

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

  components: { ProductItem },
});
</script>

<style></style>
