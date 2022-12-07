<template>
  <section class="section">
    <div class="container-fluid">
      <!-- ========== title-wrapper start ========== -->
      <div class="title-wrapper pt-30">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title mb-30">
              <h2>Thống kê</h2>
            </div>
          </div>

          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- ========== title-wrapper end ========== -->
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <div class="icon-card mb-30">
            <div class="icon purple">
              <i class="lni lni-cart-full"></i>
            </div>
            <div class="content">
              <h6 class="mb-10">Đơn hàng hoàn thành</h6>
              <h3 class="text-bold mb-10">{{ quantity }}</h3>
              <p class="text-sm text-success">
                <span class="text-gray">(30 days)</span>
              </p>
            </div>
          </div>
          <!-- End Icon Cart -->
        </div>
        <!-- End Col -->
        <div class="col-xl-3 col-lg-4 col-sm-6">
          <div class="icon-card mb-30">
            <div class="icon success">
              <i class="lni lni-dollar"></i>
            </div>
            <div class="content">
              <h6 class="mb-10">Doanh thu</h6>
              <h3 class="text-bold mb-10">{{ formatPrice(getTotal) }}</h3>
              <p class="text-sm text-success">
                <i class="lni lni-arrow-up"></i> +5.45%
                <span class="text-gray">Increased</span>
              </p>
            </div>
          </div>
          <!-- End Icon Cart -->
        </div>
      </div>
      <!-- End Row -->

      <!-- End Row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
import { order } from "../../service/order";
export default defineComponent({
  mixins: [formatValueMixin],
  data() {
    return {
      list_order: [
        {
          total: 0 as any,
        },
      ],
      quantity: 0 as number,
    };
  },

  created() {
    this.getOrderList();
  },
  computed: {
    getTotal() {
      const arr = this.list_order;

      function pricehandler(x: any, y: any) {
        return x + y.total;
      }
      const total = arr.reduce(pricehandler, 0);

      return total;
    },
  },
  methods: {
    getOrderList() {
      order.get_all(1, "complete").then((res) => {
        this.quantity = res.data.data.length;
        this.list_order = res.data.data;
      });
    },
  },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
