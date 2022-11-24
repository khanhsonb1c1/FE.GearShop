<template>
  <TheHeader />
  <blog-detail />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import BlogDetail from "../components/blog/BlogDetail.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    BlogDetail,
  },
});
</script>
