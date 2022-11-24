<template>
  <div class="col-lg-4 col-md-6 col-12">
    <!-- Start Single Product -->
    <div class="single-product">
      <div class="product-image">
        <img :src="getUrl" />
      </div>
      <div class="product-info">
        <span class="category" style="padding-bottom: 10px">{{
          formatTime(item?.created_at)
        }}</span>
        <h5 class="title" style="color: #2146c7; line-height: 1.5">
          {{ item?.title }}
        </h5>

        <div class="price blog_text" style="padding-bottom: 20px">
          <p>
            {{ item?.description }}
          </p>
        </div>
        <div class="button" @click="handleChangePage(item?._id)">
          <a class="btn"> Xem thêm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";

export default defineComponent({
  mixins: [formatValueMixin],
  data() {
    return {
      page: 1 as number,
    };
  },

  props: {
    item: {
      require: true,
      type: Object,
    },
  },

  computed: {
    getUrl() {
      const link_full = this.item?.imageUrl;
      const link = link_full.replace(`public`, "");
      return "http://localhost:8000" + link;
    },
  },

  methods: {
    handleChangePage(value: string) {
      this.$router.push({ path: `/blog/${value}` });
    },
  },

  components: {},
});
</script>

<style>
.blog_text {
  max-height: 150px;
  overflow: hidden;
  margin-bottom: 20px;
}
</style>
