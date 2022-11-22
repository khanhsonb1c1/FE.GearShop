<template>
  <TheMenu />
  <main class="main-wrapper">
    <TheHeaderAdmin />
    <TheOrderAdmin />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheMenu from "../components/admin/TheMenu.vue";
import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import TheOrderAdmin from "../components/admin/TheOrderAdmin.vue";

export default defineComponent({
  components: { TheMenu, TheHeaderAdmin, TheOrderAdmin },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
