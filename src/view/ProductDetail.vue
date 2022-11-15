<template>
  <TheHeader />
  <TheProductDetailVue />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../components/TheHeader.vue";
import TheProductDetailVue from "../components/productDetail/TheProductDetail.vue";

import TheFooter from "../components/TheFooter.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheProductDetailVue,
    TheFooter,
  },
});
</script>
