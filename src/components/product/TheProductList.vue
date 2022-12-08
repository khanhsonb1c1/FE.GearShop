<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container" style="display: flex">
      <div class="col-lg-3 col-md-6 col-12">
        <div class="info-body">
          <h4>Danh mục</h4>
          <div class="">
            <ul class="" id="">
              <li
                class=""
                v-for="(item, index) in categories"
                :key="index"
                @click="handleChooseCate(item._id, item.name)"
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
                @click="handleChooseCompany(item._id, item.name)"
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
            <label class="form-check-label"> Giá cao đến thấp </label>
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
            <label class="form-check-label">Giá thấp đến cao</label>
          </div>
          <div class="button cart-button">
            <button class="btn" @click="getProducts()">Tìm kiếm</button>
          </div>
        </div>
      </div>
      <div class="col-lg-9 col-md-6 col-12">
        <div class="row">
          <div class="wrapper_label_filter">
            <div class="label_filter label3" v-if="filter.category != ''">
              <span>{{ filter_name.category }}</span>
              <p @click="handleCloseCategory()">X</p>
            </div>
            <div class="label_filter label2" v-if="filter.company != ''">
              <span>{{ filter_name.company }}</span>
              <p @click="handleCloseCompany()">X</p>
            </div>

            <div class="label_filter label1" v-if="filterSearch != ''">
              <span>{{ filterSearch }}</span>
              <p @click="handleClearFilterSearch()">X</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(item, index) in product_list"
            :key="index"
          >
            <ProductItem :item="item" />
          </div>
        </div>

        <pagination
          :page="page"
          :current_page="current_page"
          :last_page="last_page"
          @update:page="page = $event"
        />
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
import { companyStore } from "../../store/company";
import Pagination from "../animation/Pagination.vue";

export default defineComponent({
  data() {
    return {
      page: 1 as number,
      last_page: 0 as number,
      current_page: 0 as number,
      filter: {
        category: "" as string,
        company: "" as string,
        sort: "created_at" as string,
      },

      filter_name: {
        category: "" as string,
        company: "" as string,
        filterSearch: "" as string,
        sort: "Ngày cập nhật gần nhất" as string,
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
    filterSearch() {
      return productStore().filter;
    },
  },

  watch: {
    page() {
      this.getProducts();
    },

    filterSearch() {
      this.getProducts();
    },
  },

  methods: {
    handleChooseCate(id: string, name: string) {
      this.filter.category = id;
      this.filter_name.category = name;
    },

    handleClearFilterSearch() {
      productStore().clearFilter();
      this.getProducts();
    },

    handleCloseCompany() {
      (this.filter.company = ""), this.getProducts();
    },

    handleCloseCategory() {
      (this.filter.category = ""), this.getProducts();
    },

    handleChooseCompany(id: string, name: string) {
      this.filter.company = id;
      this.filter_name.company = name;
    },
    getProducts() {
      productStore()
        .getProductList(
          this.page,
          this.filter.sort,
          this.filter.category,
          this.filter.company,
          this.filterSearch
        )
        .then((res: any) => {
          this.last_page = res.data.last_page;
          this.current_page = res.data.current_page;
        });
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

  components: { ProductItem, TheFilterMenu, Pagination },
});
</script>

<style scoped>
.wrapper_label_filter {
  display: flex;
}

.label_filter {
  display: flex;
  margin-right: 30px;
  border-radius: 10px;
  padding: 7px 5px 5px 7px;
}

span {
  margin-right: 20px;
}

p {
  color: black;
  cursor: pointer;
}

.label1 {
  background: #68b984;
  color: red;
}
.label2 {
  background: #ffebad;
  color: black;
}
.label3 {
  background: #eb6440;
  color: #fff;
}

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
