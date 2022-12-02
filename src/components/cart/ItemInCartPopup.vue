<template>
  <li>
    <a href="javascript:void(0)" class="remove" title="Xóa khỏi giỏ hàng"
      ><i class="lni lni-close"></i
    ></a>
    <div class="cart-img-head">
      <a class="cart-img"><img :src="getUrl" alt="#" /></a>
    </div>

    <div class="content">
      <h4>
        <a> {{ item?.product.name }}</a>
      </h4>
      <p class="quantity">Số lượng: {{ item?.quantity }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
export default defineComponent({
  props: {
    item: {
      type: Object,
    },
  },

  mixins: [formatValueMixin],

  computed: {
    getUrl() {
      const link_full = this.item?.product.imageUrl;
      const link = link_full.replace(`public`, "");

      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },
  },
});
</script>

<style></style>
