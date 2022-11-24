<template>
  <div class="single-product" @click="handleChangePage(item?._id)">
    <div class="product-image">
      <img :src="getUrl" />
    </div>
    <div class="product-info">
      <h5 class="title" style="color: #2146c7; line-height: 1.5">
        {{ item?.title }}
      </h5>

      <!-- <div class="price blog_text" style="padding-bottom: 20px">
        <p>
          {{ item?.description }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    item: {
      require: true,
      type: Object,
    },
  },

  methods: {
    handleChangePage(value: string) {
      this.$router.push({ path: `/blog/${value}` });
    },
  },

  computed: {
    getUrl() {
      const link_full = this.item?.imageUrl;
      const link = link_full.replace(`public`, "");
      return "http://localhost:8000" + link;
    },
  },
});
</script>

<style></style>
