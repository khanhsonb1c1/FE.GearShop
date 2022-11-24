<template>
  <TheHeader />
  <TheBanner />
  <TheNewProduct />
  <TheTrendingVue />
  <TheSale />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheBanner from "../components/TheBanner.vue";
import TheHeader from "../components/TheHeader.vue";
import TheTrendingVue from "../components/TheTrending.vue";
import TheSale from "../components/TheSale.vue";
import TheFooter from "../components/TheFooter.vue";
import TheNewProduct from "../components/TheNewProduct.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheBanner,
    TheTrendingVue,
    TheSale,
    TheFooter,
    TheNewProduct,
  },
});
</script>
