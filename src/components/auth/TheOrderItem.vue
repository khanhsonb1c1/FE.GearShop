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
    <span class="status-btn close-btn">{{ item?.status }}</span>
  </td>

  <td>
    <p class="text-sm">{{ formatPrice(item?.total) }}</p>
  </td>

  <td>
    <p class="text-sm">{{ formatTime(item?.created_at) }}</p>
  </td>

  <td>
    <div class="action justify-content-end">
      <button
        class="more-btn ml-10 dropdown-toggle"
        id="moreAction1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="lni lni-more-alt"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li
          class="dropdown-item"
          v-if="item?.status == 'close'"
          @click="handleChangeSttOrder('cancel')"
        >
          <a class="text-gray">Hủy đơn</a>
        </li>
      </ul>
    </div>
  </td>
  <AlertBox :content="content" :sstyle="style" :title="title" v-if="show" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
import { order } from "../../service/order";
import AlertBox from "../animation/AlertBox.vue";

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
      //   isShow: true,
      page: 1 as number,
      status: "" as string,
      alert: "" as string,
      isAlert: false as boolean,
      typeAlert: "" as string,
    };
  },
  computed: {
    // isShow() {
    //   if (this.item?.product_list.length == 0) {
    //     return false;
    //   } else return true;
    // },
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
    handleChangeSttOrder(status: string) {
      order
        .update(this.item?._id, {
          status: status,
        })
        .then((res) => {
          this.$emit("handleDelete");
          this.alert = "Xóa thành công";
          this.isAlert = true;
          this.typeAlert = "error";
          setTimeout(() => {
            this.isAlert = false;
          }, 3000);
        })
        .catch((err) => {});
    },
  },
  components: { AlertBox },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
