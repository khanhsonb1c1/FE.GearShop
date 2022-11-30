<template>
  <div class="shopping-item">
    <div class="dropdown-cart-header">
      <span>{{ number_item_in_order }} Sản phẩm</span>
      <router-link to="/cart">
        <a>Xem chi tiết</a>
      </router-link>
    </div>
    <ul class="shopping-list">
      <item-in-cart-popup
        v-for="(item, index) in product"
        :key="index"
        :item="item"
      />
    </ul>
    <div class="bottom">
      <!-- <div class="total">
        <span>Total</span>
        <span class="total-amount">$134.00</span>
      </div> -->
      <div class="button">
        <a class="btn animate">Giỏ hàng</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { authStore } from "../store/auth";
import { orderStore } from "../store/order";
import ItemInCartPopup from "./cart/ItemInCartPopup.vue";

export default defineComponent({
  computed: {
    id() {
      return authStore().user._id;
    },

    product() {
      return orderStore().cart_default.product_list;
    },

    number_item_in_order() {
      return orderStore().number_order;
    },
  },

  created() {
    if (this.id) {
      this.getCartDefault();
    }
  },

  watch: {
    id() {
      this.getCartDefault();
    },
  },

  methods: {
    getCartDefault() {
      orderStore().getOrderDefault(this.id);
    },
  },

  components: { ItemInCartPopup },
});
</script>

<style></style>
