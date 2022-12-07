<template>
  <div class="col-lg-12">
    <button
      type="button"
      class="btn btn-primary"
      style="margin-bottom: 30px"
      @click="showCreateForm()"
    >
      Thêm mới
    </button>
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh sách sản phẩm</h6>
        </div>
        <div class="right" style="display: flex">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg" v-model="status">
                <option value="created_at">Ngày tạo</option>
                <option value="price">Giá</option>
                <option value="quantity">Số lượng</option>
              </select>
            </div>
          </div>

          <div class="select-style-1" style="margin-left: 20px">
            <div class="select-position select-sm">
              <select class="light-bg" v-model="category">
                <option value="">Danh mục</option>
                <option
                  v-for="(itemz, indexz) in getCategory"
                  :key="indexz"
                  :value="itemz._id"
                >
                  {{ itemz.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="select-style-1" style="margin-left: 20px">
            <div class="select-position select-sm">
              <select class="light-bg" v-model="company">
                <option value="">Thương hiệu</option>
                <option
                  v-for="(item, index) in getCompany"
                  :key="index"
                  :value="item._id"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Sản phẩm</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Nhóm <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Giá <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Số lượng <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Thương hiệu <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>

              <th>
                <h6 class="text-sm text-medium text-end">
                  Actions <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in product_list" :key="index">
              <TableProductItem :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination
        :page="page"
        :current_page="current_page"
        :last_page="last_page"
        @update:page="page = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../../../store/category";
import { companyStore } from "../../../store/company";
import { productStore } from "../../../store/product";
import Pagination from "../../animation/Pagination.vue";
import TableProductItem from "./TableProductItem.vue";
export default defineComponent({
  data() {
    return {
      page: 1 as number,
      status: "created_at",
      category: "",
      company: "",
    };
  },

  created() {
    this.getProducts();
  },

  computed: {
    product_list() {
      return productStore().product_list;
    },
    current_page() {
      return productStore().current_page;
    },
    last_page() {
      return productStore().last_page;
    },
    getCompany() {
      return companyStore().company_list;
    },

    getCategory() {
      return categoryStore().category_list;
    },
  },

  watch: {
    page() {
      this.getProducts();
    },

    status() {
      this.getProducts();
    },

    category() {
      this.getProducts();
    },

    company() {
      this.getProducts();
    },
  },

  methods: {
    getProducts() {
      productStore().getProductList(
        this.page,
        this.status,
        this.category,
        this.company
      );
    },

    showCreateForm() {
      productStore().changeShowForm();
    },
  },
  components: { TableProductItem, Pagination },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
