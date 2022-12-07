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
        <li class="dropdown-item" @click="isShow = true">
          <a class="text-gray">Chi tiết</a>
        </li>
        <li class="dropdown-item">
          <a class="text-gray" @click="deleteProduct(item?._id)">Xóa</a>
        </li>
      </ul>
    </div>
    <the-edit-product-form
      :item="item"
      v-if="isShow"
      @handleClose="handleClose"
    />
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../../mixins/mixin";
import { productStore } from "../../../store/product";
import TheEditProductForm from "./TheEditProductForm.vue";
export default defineComponent({
  components: { TheEditProductForm },
  mixins: [formatValueMixin],
  props: {
    item: {
      type: Object,
      requied: true,
    },
  },

  data() {
    return {
      isShow: false,
    };
  },

  computed: {
    getUrl() {
      const link_full = this.item?.imageUrl;
      const link = link_full.replace(`public`, "");

      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },
  },

  methods: {
    deleteProduct(id: string) {
      productStore().deleteProduct(id);
    },

    handleClose() {
      this.isShow = false;
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
