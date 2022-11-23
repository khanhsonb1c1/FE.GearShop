<template>
  <TheHeader />
  <TheCartPage />
  <TheFooter />
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../components/TheHeader.vue";
import TheCartPage from "../components/TheCartPage.vue";
import TheFooter from "../components/TheFooter.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheCartPage,
    TheFooter,
  },
});
</script>
  