<template>
  <div class="col-lg-6">
    <!-- input style start -->
    <div class="card-style mb-30">
      <OutputText title="Đơn hàng" :value="order.cart_id" />
      <OutputText title="Người nhận" :value="order.user.full_name" />
      <OutputText title="Địa chỉ" :value="order.user.address_detail" />
      <OutputText title="Sđt" :value="order.user.phone" />
      <OutputText
        title="Ghi chú"
        :value="
          order?.note == '' || null || undefined
            ? 'Không có ghi chú'
            : order.note
        "
      />
    </div>
  </div>

  <div class="col-lg-6">
    <!-- input style start -->
    <div class="card-style mb-30">
      <OutputText title="Trạng thái" :value="order.status" />
      <OutputText title="Ngày tạo" :value="formatTime(order.created_at)" />
      <OutputText title="Tổng tiền sản phẩm" :value="formatPrice(getTotal)" />
      <OutputText title="Phí vận chuyển" :value="`30.000 đ`" />
      <OutputText title="Tổng phí" :value="formatPrice(getTotal + 30000)" />
    </div>
  </div>

  <div class="col-lg-12">
    <h6 class="mb-25">Danh sách sản phẩm</h6>
    <div class="card-style mb-30">
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Sản phẩm</h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  số lượng <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Khuyến mãi <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Giá / sp <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Tổng giá <i class="lni lni-arrows-vertical"></i>
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
            <tr v-for="(item, index) in order.product_list" :key="index">
              <OrderDetailItem :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStt from "../../button/ButtonStt.vue";
import OutputText from "../../output/OutputText.vue";
import { formatValueMixin } from "../../../mixins/mixin";
import { order } from "../../../service/order";
import OrderDetailItem from "./OrderDetailItem.vue";

export default defineComponent({
  mixins: [formatValueMixin],
  data() {
    return {
      order: {
        _id: "" as string,
        note: "" as string,
        user: {
          full_name: "" as string,
          email: "" as string,
          address_detail: "" as string,
          phone: "" as string,
        },
        cart_id: "" as string,
        status: "" as string,
        created_at: 0 as number,
        product_list: [
          {
            quantity: 0 as number,
            product: {
              name: "" as string,
              sale: 0 as number,
              imageUrl: "" as string,
              price: 0 as number,
            },
          },
        ],
      },
    };
  },

  created() {
    this.getOrderdetail();
  },

  computed: {
    getTotal() {
      const arr = this.order.product_list;

      function pricehandler(x: any, y: any) {
        return (
          x + ((y.product.price * (100 - y.product.sale)) / 100) * y.quantity
        );
      }
      const total = arr.reduce(pricehandler, 0);

      return total;
    },
  },
  methods: {
    getOrderdetail() {
      const id = this.$route.params.id;
      order
        .get_detail(id)
        .then((res) => {
          this.order = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  components: { OutputText, ButtonStt, OrderDetailItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
