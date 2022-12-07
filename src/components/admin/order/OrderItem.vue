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
      <ul class="dropdown-menu dropdown-menu-end">
        <li class="dropdown-item" @click="handleChangeSttOrder(status)">
          <a class="text-gray">{{ getSttBtnNext }}</a>
        </li>
        <li class="dropdown-item" @click="handleChangeSttOrder('cancel')">
          <a class="text-gray">Hủy đơn</a>
        </li>
        <li class="dropdown-item" @click="handleDelete()">
          <a class="text-gray">Xóa</a>
        </li>
      </ul>
    </div>
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../../mixins/mixin";
import { order } from "../../../service/order";
import { orderStore } from "../../../store/order";
export default defineComponent({
  mixins: [formatValueMixin],
  props: {
    item: {
      type: Object,
      requied: true,
    },
  },

  data() {
    return {
      page: 1 as number,
      status: "" as string,
      alert: "" as string,
      isAlert: false as boolean,
      typeAlert: "" as string,
    };
  },

  computed: {
    getSttBtnNext() {
      if (this.item?.status == "create") {
        this.status = "shipment";
        return "Đến Vận chuyển";
      }

      if (this.item?.status == "close") {
        this.status = "create";
        return "Đến Tạo đơn";
      }
      if (this.item?.status == "shipment") {
        this.status = "complete";
        return "Đến Đã xong";
      }
      if (this.item?.status == "cancel") {
        return "Đã hủy đơn";
      }
    },

    get_current_page() {
      return orderStore().page;
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

    handleChangeSttOrder(status: string) {
      order
        .update(this.item?._id, {
          status: status,
        })
        .then((res) => {
          orderStore().getOrderList(this.get_current_page, "");
          this.alert = "Cập nhật thành công";
          this.isAlert = true;
          this.typeAlert = "success";

          setTimeout(() => {
            this.isAlert = false;
          }, 3000);
        })
        .catch((err) => {
          this.alert = err;
          this.isAlert = true;
          this.typeAlert = "error";

          setTimeout(() => {
            this.isAlert = false;
          }, 3000);
        });
    },

    handleDelete() {
      orderStore()
        .deleteOrder(this.item?._id)
        .then((res) => {
          orderStore().getOrderList(this.get_current_page, "");
          this.alert = "Xóa thành công";
          this.isAlert = true;
          this.typeAlert = "success";

          setTimeout(() => {
            this.isAlert = false;
          }, 3000);
        });
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
