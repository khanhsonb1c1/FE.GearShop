<template>
  <td>
    <p class="text-sm">{{ item?.code }}</p>
  </td>
  <td>
    <p class="text-sm">{{ formatPrice(item?.value) }}</p>
  </td>
  <td>
    <p class="text-sm">{{ formatTime(item?.created_at) }}</p>
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
        <li class="dropdown-item" @click="handleDelete(item?._id)">
          <a class="text-gray">Remove</a>
        </li>
      </ul>
    </div>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../../mixins/mixin";
import { voucher } from "../../../service/order";
import { orderStore } from "../../../store/order";
export default defineComponent({
  mixins: [formatValueMixin],
  props: {
    item: {
      type: Object,
      requied: true,
    },
  },

  methods: {
    handleDelete(id: string) {
      voucher.delete(id).then(() => {
        orderStore().getVoucherList();
      });
    },
  },

  computed: {},
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
