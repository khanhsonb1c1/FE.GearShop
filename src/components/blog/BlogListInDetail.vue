<template>
  <div class="col-lg-3 col-md-6 col-12">
    <h5 class="title" style="line-height: 1.5; padding: 25px 0px 10px 20px">
      Bài viết khác
    </h5>
    <blog-list-detail-item
      v-for="(item, index) in blog_list"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { blogStore } from "../../store/blog";
import BlogListDetailItem from "./BlogListDetailItem.vue";
export default defineComponent({
  components: { BlogListDetailItem },
  computed: {
    blog_list() {
      return blogStore().blog_list;
    },
  },
});
</script>

<style></style>
