<template>
  <td>
    <p class="text-sm">{{ item?.name }}</p>
  </td>
  <td>
    <p class="text-sm">{{ item?.company_id }}</p>
  </td>
  <td>
    <p class="text-sm">{{ item?.product?.length }}</p>
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

      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
