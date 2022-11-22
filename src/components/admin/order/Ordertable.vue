<template>
  <div class="col-lg-12">
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh mục</h6>
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Mã đơn hàng</h6>
              </th>

              <th>
                <h6 class="text-sm text-medium">Khách hàng</h6>
              </th>

              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Trạng thái <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Ngày tạo <i class="lni lni-arrows-vertical"></i>
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
            <tr v-for="(item, index) in order_list" :key="index">
              <order-item :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderItem from "./OrderItem.vue";
import { orderStore } from "../../../store/order";

export default defineComponent({
  data() {
    return {
      page: 1,
    };
  },

  created() {
    this.getOrderList();
  },

  computed: {
    order_list() {
      return orderStore().cart_list;
    },
  },

  methods: {
    getOrderList() {
      orderStore()
        .getOrderList(this.page)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { OrderItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
