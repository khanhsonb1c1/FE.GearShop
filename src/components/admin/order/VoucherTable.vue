<template>
  <div class="col-lg-8">
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh mục Voucher</h6>
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Mã voucher</h6>
              </th>

              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Giá trị (vnđ) <i class="lni lni-arrows-vertical"></i>
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
            <tr v-for="(item, index) in voucher_list" :key="index">
              <VoucherItem :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { orderStore } from "../../../store/order";
import VoucherItem from "./VoucherItem.vue";

export default defineComponent({
  data() {
    return {};
  },

  created() {
    this.getVoucherList();
  },

  computed: {
    voucher_list() {
      return orderStore().voucher_list;
    },
  },

  methods: {
    getVoucherList() {
      orderStore()
        .getVoucherList()
        .then()
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { VoucherItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
