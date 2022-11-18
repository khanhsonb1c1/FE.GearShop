<template>
  <td>
    <div class="product">
      <div class="image">
        <img :src="getUrl" alt="" />
      </div>
      <p class="text-sm">{{ item?.name }}</p>
    </div>
  </td>
  <td>
    <p class="text-sm">{{ item?.category?.name }}</p>
  </td>
  <td>
    <p class="text-sm">{{ formatPrice(item?.price) }}</p>
  </td>
  <td>
    <p class="text-sm">{{ item?.quantity }}</p>
  </td>
  <td>
    <span class="status-btn close-btn">{{ item?.company?.name }}</span>
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
    getUrl() {
      const link_full = this.item?.imageUrl;
      const link = link_full.replace(`public`, "");

      return "http://localhost:8000" + link;
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
