<template>
  <div class="col-lg-7">
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh sách bài viết</h6>
        </div>
        <div class="right">
          <div class="select-style-1">
            <div class="select-position select-sm">
              <select class="light-bg">
                <option value="">Today</option>
                <option value="">Yesterday</option>
              </select>
            </div>
          </div>
          <!-- end select -->
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Bài viết</h6>
              </th>

              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Tương tác <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>

              <th>
                <h6 class="text-sm text-medium text-end">
                  Actions <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in blog_list" :key="index">
              <TableBlogItem :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { blogStore } from "../../../store/blog";
import TableBlogItem from "./TableBlogItem.vue";

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

  methods: {},
  components: { TableBlogItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
