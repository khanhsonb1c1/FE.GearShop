<template>
  <div class="single-product" style="position: relative">
    <div class="product-image">
      <img :src="getUrl" />
      <div class="button" @click="goToDetailPage(item?._id)">
        <a class="btn"><i class="lni lni-cart"></i> Mua ngay</a>
      </div>
    </div>
    <div class="product-info">
      <span class="category">{{ item?.category.name }}</span>
      <h4 class="title">
        <a href="product-grids.html">{{ item?.name }}</a>
      </h4>
      <ul class="review">
        <li><i class="lni lni-star-filled"></i></li>
        <li><i class="lni lni-star-filled"></i></li>
        <li><i class="lni lni-star-filled"></i></li>
        <li><i class="lni lni-star-filled"></i></li>
        <li><i class="lni lni-star"></i></li>
        <li><span>4.0 Review(s)</span></li>
      </ul>
      <div class="price">
        <span>{{ formatPrice(getPriceItem) }}</span>
        <span
          style="
            color: #65647c;
            font-size: 14px;
            font-weight: 400;
            padding-left: 20px;
            text-decoration: line-through;
          "
          >{{ formatPrice(item?.price) }}</span
        >
      </div>
    </div>
    <div class="sale_icon" v-if="item?.sale != 0">
      <span>{{ item?.sale }}%</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
export default defineComponent({
  mixins: [formatValueMixin],
  props: {
    item: {
      type: Object,
      requied: true,
    },
  },

  computed: {
    getUrl() {
      const link_full = this.item?.imageUrl;
      const link = link_full.replace(`public`, "");

      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },

    getPriceItem() {
      return this.item?.price - (this.item?.price * this.item?.sale) / 100;
    },
  },

  methods: {
    goToDetailPage(value: any) {
      this.$router.push({ path: `/product-detail/${value}` });
    },
  },
});
</script>

<style scoped>
.product-image {
  height: 300px !important;
}

.product-info {
  height: 190px !important;
}

img {
  height: 300px;
}

.sale_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -20px;
  right: -20px;
  height: 80px;
  width: 80px;
  background: #f49d1a;
  clip-path: polygon(
    51% 0,
    67% 30%,
    98% 35%,
    75% 60%,
    86% 91%,
    52% 79%,
    19% 92%,
    28% 57%,
    2% 35%,
    36% 32%
  );
}

.sale_icon span {
  color: black;
  font-size: 16px;
  text-align: center;
  align-items: center;
}
</style>
