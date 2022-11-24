<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <blog-item
          v-for="(item, index) in blog_list"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { blogStore } from "../../store/blog";
import BlogItem from "./BlogItem.vue";

export default defineComponent({
  data() {
    return {
      page: 1 as number,
    };
  },

  computed: {
    blog_list() {
      return blogStore().blog_list;
    },
  },

  created() {
    this.getBlogList();
  },

  methods: {
    getBlogList() {
      blogStore().getBlogList(this.page);
    },
  },

  components: {
    BlogItem,
  },
});
</script>

<style></style>
