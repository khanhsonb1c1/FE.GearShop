<template>
  <td>
    <div class="product">
      <div class="image">
        <img :src="getUrl" alt="" />
      </div>
      <p class="text-sm">{{ item?.title }}</p>
    </div>
  </td>
  <td>
    <p class="text-sm">{{ item?.comment?.length }}</p>
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
        <li class="dropdown-item" @click="deleteBlog()">
          <a class="text-gray">Xóa</a>
        </li>
        <li class="dropdown-item" @click="isShow = true">
          <a class="text-gray">Chỉnh Sửa</a>
        </li>
      </ul>
    </div>
    <TheEditBlog :item="item" v-if="isShow" @handleClose="handleClose" />
  </td>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../../mixins/mixin";
import { blog } from "../../../service/blog";
import { blogStore } from "../../../store/blog";
import TheEditBlog from "./TheEditBlog.vue";
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
    handleClose() {
      this.isShow = false;
    },

    deleteBlog() {
      blog.delete(this.item?._id).then((res) => {
        blogStore().getBlogList(1);
      });
    },
  },
  components: { TheEditBlog },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
