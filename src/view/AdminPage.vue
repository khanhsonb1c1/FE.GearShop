<template>
  <TheMenu />
  <main class="main-wrapper">
    <TheHeaderAdmin />
    <TheHomeAdmin />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheMenu from "../components/admin/TheMenu.vue";
import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import TheHomeAdmin from "../components/admin/TheHomeAdmin.vue";

export default defineComponent({
  components: { TheMenu, TheHeaderAdmin, TheHomeAdmin },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
