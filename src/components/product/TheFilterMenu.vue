<template>
  <div class="col-lg-3 col-md-6 col-12">
    <div class="info-body">
      <h4>Danh mục</h4>
      <div class="">
        <ul class="" id="">
          <li
            class=""
            v-for="(item, index) in categories"
            :key="index"
            @click="handleChooseCate(item._id)"
          >
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>

      <h4>Thương hiệu</h4>
      <div class="">
        <ul class="" id="">
          <li
            class=""
            v-for="(item, index) in company_list"
            :key="index"
            @click="handleChooseCompany(item._id)"
          >
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <h4 style="padding-bottom: 20px">Sắp xếp</h4>
      <div class="form-check checkbox-style checkbox-success mb-20">
        <input
          class="form-check-input"
          type="radio"
          value="created_at"
          id="checkbox-3"
          name="filter"
          v-model="filter.sort"
        />
        <label class="form-check-label"> Thời gian gần > xa</label>
      </div>

      <div class="form-check checkbox-style checkbox-success mb-20">
        <input
          class="form-check-input"
          type="radio"
          value="-created_at"
          id="checkbox-3"
          name="filter"
          v-model="filter.sort"
        />
        <label class="form-check-label"> Thời gian xa > gần</label>
      </div>

      <div class="form-check checkbox-style checkbox-success mb-20">
        <input
          class="form-check-input"
          type="radio"
          value="-price"
          id="checkbox-3"
          name="filter"
          v-model="filter.sort"
        />
        <label class="form-check-label"> Giá thấp đến cao</label>
      </div>

      <div class="form-check checkbox-style checkbox-success mb-20">
        <input
          class="form-check-input"
          type="radio"
          value="price"
          id="checkbox-3"
          name="filter"
          v-model="filter.sort"
        />
        <label class="form-check-label"> Giá cao đến thấp</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { product } from "../../service/product";
import { categoryStore } from "../../store/category";
import { companyStore } from "../../store/company";
import { productStore } from "../../store/product";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  data() {
    return {
      page: 1 as number,
      filter: {
        category: "" as string,
        company: "" as string,
        sort: "created_at" as string,
      },
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

    company_list() {
      return companyStore().company_list;
    },
  },

  methods: {
    handleChooseCate(id: string) {
      this.filter.category = id;
      this.getProducts();
    },

    handleChooseCompany(id: string) {
      this.filter.company = id;
      this.getProducts();
    },
    getProducts() {
      productStore().getProductList(
        this.page,
        this.filter.sort,
        this.filter.category,
        this.filter.company
      );
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

<style scoped>
ul {
  padding: 20px 0px;
}
li {
  padding: 10px;
}

li:hover {
  background: #8d9eff;
  color: #e14d2a;
  cursor: pointer;
}
</style>
