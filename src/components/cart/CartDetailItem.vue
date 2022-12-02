<template>
  <hr class="my-4" />
  <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img :src="getUrl" class="img-fluid rounded-3" alt="" />
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <h6 style="margin-bottom: 20px !important" class="text-black mb-0">
        {{ product?.product.name }}
      </h6>
      <h6 class="text-muted">sale: {{ product?.product.sale }}%</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
      <button
        class="btn btn-link px-2"
        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
      >
        <i class="fas fa-minus"></i>
      </button>

      <input
        min="0"
        name="quantity"
        v-model="quantity"
        type="number"
        class="form-control form-control-sm"
      />

      <button class="btn btn-link px-2">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 class="mb-0">{{ formatPrice(getPriceItem) }}</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <a class="text-muted"><i class="fas fa-times"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";

export default defineComponent({
  props: {
    product: { type: Object },
  },

  mixins: [formatValueMixin],

  data() {
    return {
      quantity: 0 as number,
    };
  },

  mounted() {
    this.quantity = this.product?.quantity;
  },

  computed: {
    getUrl() {
      const link_full = this.product?.product.imageUrl;
      const link = link_full.replace(`public`, "");

      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },

    getPriceItem() {
      return (
        this.product?.quantity *
        (this.product?.product.price -
          (this.product?.product.price * this.product?.product.sale) / 100)
      );
    },
  },
});
</script>

<style></style>
