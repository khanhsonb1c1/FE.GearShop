<template>
  <div class="col-lg-12">
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh sách đơn hàng</h6>
        </div>
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg" v-model="status">
                <option value="">tất cả</option>
                <option value="close">chưa duyệt</option>
                <option value="complete">hoàn thành</option>
                <option value="create">đã tạo đơn</option>
                <option value="shipment">Đang vận chuyển</option>
                <option value="cancel">Đã hủy</option>
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
    <Pagination
      :page="page"
      :current_page="current_page"
      :last_page="last_page"
      @update:page="page = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrderItem from "./OrderItem.vue";
import { orderStore } from "../../../store/order";
import Pagination from "../../animation/Pagination.vue";

export default defineComponent({
  data() {
    return {
      page: 1,
      last_page: 0 as number,
      current_page: 0 as number,
      status: "" as string,
    };
  },

  watch: {
    status() {
      this.getOrderList();
    },
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
        .getOrderList(this.page, this.status)
        .then((res: any) => {
          this.last_page = res.data.last_page;
          this.current_page = res.data.current_page;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { OrderItem, Pagination },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
