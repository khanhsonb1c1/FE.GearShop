<template>
  <div class="col-lg-4 bg-grey">
    <div class="p-5">
      <h3 class="fw-bold mb-5 mt-2 pt-1">Thanh toán</h3>
      <hr class="my-4" />

      <div class="d-flex justify-content-between mb-4">
        <h5 class="text-uppercase">Tạm tính</h5>
        <h5>{{ formatPrice(getTotal) }}</h5>
      </div>

      <div class="d-flex justify-content-between mb-4">
        <h5 class="text-uppercase">Khuyến mãi</h5>
        <h5>{{ formatPrice(getSale) }}</h5>
      </div>

      <h5 class="text-uppercase mb-3">voucher</h5>

      <div class="mb-5">
        <div class="form-outline">
          <input
            type="text"
            id="form3Examplea2"
            class="form-control form-control-lg"
            v-model="filter"
            v-on:keyup.enter="checkVoucher()"
          />
          <label class="form-label">Nhập mã khuyến mãi của bạn</label>
        </div>
      </div>

      <hr class="my-4" />

      <div class="d-flex justify-content-between mb-5">
        <h5 class="text-uppercase">Tổng cộng</h5>
        <h5>{{ formatPrice(getTotalPay) }}</h5>
      </div>

      <button
        class="btn btn-dark btn-block btn-lg"
        @click="handleCreateOrder()"
      >
        Xác nhận
      </button>

      <alert-box
        :content="content"
        :sstyle="style"
        :title="title"
        v-if="show"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";

import { authStore } from "../../store/auth";
import { orderStore } from "../../store/order";
import AlertBox from "../animation/AlertBox.vue";

export default defineComponent({
  mixins: [formatValueMixin],
  computed: {
    getTotal() {
      return orderStore().get_total_default;
    },

    id_user() {
      return authStore().user._id;
    },

    id_cart() {
      return orderStore().cart_default._id;
    },

    getSale() {
      return orderStore().sale;
    },

    getTotalPay() {
      return orderStore().totalPay;
    },
  },

  data() {
    return {
      show: false,
      title: "",
      content: "",
      style: "",
      filter: "" as string,
      value: 0,
    };
  },

  methods: {
    handleCreateOrder() {
      orderStore()
        .updateOrder(this.id_cart, "close")
        .then((res) => {
          orderStore().getOrderDefault(this.id_user);
          this.show = true;
          this.title = " Thành công";
          this.style = "success";
          setTimeout(() => {
            this.show = false;
          }, 3000);
        })
        .catch((err) => {
          this.show = true;
          this.title = " Có lỗi";
          this.content = `${err}`;
          this.style = "error";
          setTimeout(() => {
            this.show = false;
          }, 3000);
        });
    },

    checkVoucher() {
      orderStore().getVoucher(this.filter);
    },
  },

  components: { AlertBox },
});
</script>

<style scoped>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.card-registration .select-arrow {
  top: 13px;
}
.btn {
  background: rgb(220, 53, 53);
  width: 100%;
  transition: 1s;
}

.btn:hover {
  background: #ff7000;
  transition: 1s;
}
.bg-grey {
  background-color: #eae8e8;
}

@media (min-width: 992px) {
  .card-registration-2 .bg-grey {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

@media (max-width: 991px) {
  .card-registration-2 .bg-grey {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}
</style>
