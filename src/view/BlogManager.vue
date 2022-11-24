<template>
  <TheMenu />
  <main class="main-wrapper">
    <TheHeaderAdmin />
    <TheBlogAdmin />
  </main>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import TheMenu from "../components/admin/TheMenu.vue";
import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import TheBlogAdmin from "../components/admin/TheBlogAdmin.vue";

export default defineComponent({
  components: { TheMenu, TheHeaderAdmin, TheBlogAdmin },
});
</script>
  
  <style scoped>
@import url("../assets/assets/css/main.css");
</style>
  