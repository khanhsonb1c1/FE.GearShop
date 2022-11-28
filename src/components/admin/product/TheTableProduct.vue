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
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Ngày tạo</option>
                <option value="">Giá</option>
                <option value="">Số lượng</option>
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "../../../store/product";
import TableProductItem from "./TableProductItem.vue";
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
      productStore().getProductList(this.page);
    },

    showCreateForm() {
      productStore().changeShowForm();
    },
  },
  components: { TableProductItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
