<template>
  <TheHeader />
  <TheProductList />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheBanner from "../TheBanner.vue";
import TheFooter from "../TheFooter.vue";
import TheHeader from "../TheHeader.vue";
import TheFilterMenu from "./TheFilterMenu.vue";
import TheProductList from "./TheProductList.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheBanner,
    TheFooter,
    TheProductList,
    TheFilterMenu,
  },
});
</script>
