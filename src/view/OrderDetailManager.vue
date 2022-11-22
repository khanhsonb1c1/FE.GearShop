<template>
  <TheMenu />
  <main class="main-wrapper">
    <TheHeaderAdmin />
    <TheOrderDetailAdmin />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheMenu from "../components/admin/TheMenu.vue";
import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import TheOrderDetailAdmin from "../components/admin/TheOrderDetailAdmin.vue";

export default defineComponent({
  components: { TheMenu, TheHeaderAdmin, TheOrderDetailAdmin },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
