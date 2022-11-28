<template>
  <td @click="handleRedirectDetail(item?._id)">
    <div class="product">
      <div class="image">
        <img :src="getUrl" alt="" />
      </div>
      <p class="text-sm">{{ item?.cart_id }}</p>
    </div>
  </td>
  <td @click="handleRedirectDetail(item?._id)">
    <p class="text-sm">{{ item?.user?.full_name }}</p>
  </td>

  <td @click="handleRedirectDetail(item?._id)">
    <span class="status-btn close-btn">{{ item?.status }}</span>
  </td>
  <td @click="handleRedirectDetail(item?._id)">
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
        <li class="dropdown-item">
          <a href="#0" class="text-gray">{{ getSttBtnNext }}</a>
        </li>
        <li class="dropdown-item">
          <a href="#0" class="text-gray">Hủy đơn</a>
        </li>
        <li class="dropdown-item">
          <a href="#0" class="text-gray">Xóa</a>
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
    getSttBtnNext() {
      if (this.item?.status == "create") {
        return "Đến Vận chuyển";
      }
      if (this.item?.status == "open") {
        return "Đến Đóng đơn";
      }
      if (this.item?.status == "close") {
        return "Đến Tạo đơn";
      }
      if (this.item?.status == "shipment") {
        return "Đến Đã xong";
      }
    },

    getUrl() {
      const link_full = this.item?.product_list[0]?.product?.imageUrl;

      if (link_full == null || undefined) {
        return "https://img.icons8.com/doodle/50/null/question-mark--v1.png";
      } else {
        const link = link_full.replace(`public`, "");

        return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
      }
    },
  },

  methods: {
    handleRedirectDetail(id: any) {
      this.$router.push({ path: `/admin/order/${id}` });
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
