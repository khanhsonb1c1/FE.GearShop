<template>
  <div class="single-product">
    <div class="product-image">
      <img :src="getUrl" />
      <div class="button" @click="goToDetailPage(item?._id)">
        <a class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
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
        <span>{{ item?.price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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

      return "http://localhost:8000" + link;
    },
  },

  methods: {
    goToDetailPage(value: any) {
      this.$router.push({ path: `/product-detail/${value}` });
    },
  },
});
</script>

<style></style>
