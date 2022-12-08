<template>
  <div class="container" style="display: flex; padding-top: 50px">
    <div class="col-lg-3 col-md-6 col-12">
      <div class="info-body">
        <h4>Danh mục</h4>
        <div class="">
          <ul class="" id="">
            <li>
              <a>Cá nhân</a>
            </li>
            <li>
              <a>Lịch sử mua hàng</a>
            </li>
            <li>
              <a>Sổ địa chỉ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-9 col-md-6 col-12">
      <div class="card-style mb-30">
        <div
          class="title d-flex flex-wrap align-items-center justify-content-between"
        >
          <div class="left">
            <h6 class="text-medium mb-30">Lịch sử đặt hàng</h6>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table top-selling-table">
            <thead>
              <tr>
                <th>
                  <h6 class="text-sm text-medium">Mã đơn hàng</h6>
                </th>

                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    Trạng thái <i class="lni lni-arrows-vertical"></i>
                  </h6>
                </th>

                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    Tổng tiền <i class="lni lni-arrows-vertical"></i>
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
                <TheOrderItem
                  :item="item"
                  v-if="item?.product_list.length != 0"
                  @handleDelete="handleDelete"
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- End Title -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { order } from "../../service/order";
import { authStore } from "../../store/auth";
import TheOrderItem from "./TheOrderItem.vue";

export default defineComponent({
  data() {
    return {
      order_list: [
        {
          _id: "" as string,
          cart_id: "" as string,
          user: {
            full_name: "" as string,
          },
          total: 0 as number,
          created_at: 0 as number,
          status: "" as string,
          product_list: [
            {
              product: {
                imageUrl: "" as string,
              },
            },
          ],
        },
      ],
    };
  },

  created() {
    this.getOrderList();
  },

  computed: {
    user_id() {
      return authStore().user._id;
    },
  },

  methods: {
    handleDelete() {
      this.getOrderList();
    },
    getOrderList() {
      order.get_order_user(1, this.user_id).then((res) => {
        this.order_list = res.data.data;
      });
    },
  },

  components: { TheOrderItem },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");

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
