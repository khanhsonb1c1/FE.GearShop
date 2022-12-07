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
        <h5>0</h5>
      </div>

      <h5 class="text-uppercase mb-3">voucher</h5>

      <div class="mb-5">
        <div class="form-outline">
          <input
            type="text"
            id="form3Examplea2"
            class="form-control form-control-lg"
          />
          <label class="form-label" for="form3Examplea2"
            >Nhập mã khuyến mãi của bạn</label
          >
        </div>
      </div>

      <hr class="my-4" />

      <div class="d-flex justify-content-between mb-5">
        <h5 class="text-uppercase">Tổng cộng</h5>
        <h5>{{ formatPrice(getTotal) }}</h5>
      </div>

      <button
        class="btn btn-dark btn-block btn-lg"
        @click="handleCreateOrder()"
      >
        Xác nhận
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
import { authStore } from "../../store/auth";
import { orderStore } from "../../store/order";

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
  },
  
  data(){
  return {
  show: false,
  title: "",
  content: "",
  }
  }
  
  methods: {
    handleCreateOrder() {
      orderStore()
        .updateOrder(this.id_cart, "close")
        .then(() => {
        
          orderStore().getOrderDefault(this.id_user);
        })
        .catch((err) => {});
    },
  },

  components: {},
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
