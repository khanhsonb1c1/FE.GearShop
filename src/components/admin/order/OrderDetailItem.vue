<template>
  <td>
    <div class="product">
      <div class="image">
        <img :src="getUrl" alt="" />
      </div>
      <p class="text-sm">{{ item?.cart_id }}</p>
    </div>
  </td>
  <td>
    <p class="text-sm">{{ item?.quantity }}</p>
  </td>

  <td>
    <p class="text-sm">{{ item?.product.sale }} %</p>
  </td>

  <td>
    <p class="text-sm">{{ formatPrice(getSale) }}</p>
  </td>

  <td>
    <p class="text-sm">
      {{ formatPrice(getSale * item?.quantity) }}
    </p>
  </td>

  <td>
    <div class="action justify-content-end">
      <!-- <button class="edit">
        <i class="lni lni-pencil"></i>
      </button> -->
      <button
        class="more-btn ml-10 dropdown-toggle"
        id="moreAction1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="lni lni-more-alt"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="moreAction1">
        <li class="dropdown-item">
          <a href="#0" class="text-gray">Remove</a>
        </li>
        <li class="dropdown-item">
          <a href="#0" class="text-gray">Edit</a>
        </li>
      </ul>
    </div>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../../mixins/mixin";
export default defineComponent({
  mixins: [formatValueMixin],
  props: {
    item: {
      type: Object,
      requied: true,
    },
  },

  computed: {
    getSale() {
      return (
        this.item?.product?.price -
        (this.item?.product?.sale * this.item?.product?.price) / 100
      );
    },

    getUrl() {
      const link_full = this.item?.product?.imageUrl;

      if (link_full == null || undefined) {
        return "https://img.icons8.com/doodle/50/null/question-mark--v1.png";
      } else {
        const link = link_full.replace(`public`, "");

        return "http://localhost:8000" + link;
      }
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
