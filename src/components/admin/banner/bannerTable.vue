<template>
  <div class="col-lg-8">
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh mục</h6>
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Hình ảnh</h6>
              </th>

              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Trạng thái <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Ngày tạo <i class="lni lni-arrows-vertical"></i>
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
            <tr v-for="(item, index) in banner_list" :key="index">
              <BannerItem :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { bannerStore } from "../../../store/banner";
import BannerItem from "./BannerItem.vue";

export default defineComponent({
  data() {
    return {};
  },

  mounted() {
    this.getbannerList();
  },

  computed: {
    banner_list() {
      return bannerStore().banner_list;
    },
  },

  methods: {
    getbannerList() {
      bannerStore().getBannerList(1, "");
    },
  },
  components: { BannerItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
