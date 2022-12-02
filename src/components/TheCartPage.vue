<template>
  <section class="h-100 h-custom" style="background-color: #eff5f5">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div
            class="card card-registration card-registration-2"
            style="border-radius: 15px"
          >
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5">
                    <div
                      class="d-flex justify-content-between align-items-center mb-5"
                    >
                      <h1 class="fw-bold mb-0 text-black">Giỏ hàng</h1>
                      <h6 class="mb-0 text-muted">
                        Đang có {{ getNumberProduct }} sản phẩm
                      </h6>
                    </div>

                    <CartDetailItem
                      v-for="(product, index) in product_list"
                      :key="index"
                      :product="product"
                    />

                    <!-- item here -->

                    <hr class="my-4" />

                    <div class="pt-5">
                      <h6 class="mb-0">
                        <a class="text-body"
                          ><i class="fas fa-long-arrow-alt-left me-2"></i>Về cửa
                          hàng</a
                        >
                      </h6>
                    </div>
                  </div>
                </div>
                <cart-payment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { orderStore } from "../store/order";
import CartDetailItem from "./cart/CartDetailItem.vue";
import CartPayment from "./cart/CartPayment.vue";
export default defineComponent({
  computed: {
    getNumberProduct() {
      return orderStore().number_order;
    },

    product_list() {
      return orderStore().cart_default.product_list;
    },
  },

  components: { CartDetailItem, CartPayment },
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
