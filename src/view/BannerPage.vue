<template>
  <TheMenu />
  <main class="main-wrapper">
    <TheHeaderAdmin />
    <BannerManager />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheMenu from "../components/admin/TheMenu.vue";
import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import BannerManager from "../components/admin/banner/BannerManager.vue";

export default defineComponent({
  components: { TheMenu, TheHeaderAdmin, BannerManager },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
