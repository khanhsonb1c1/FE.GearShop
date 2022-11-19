<template>
  <TheMenu />
  <main class="main-wrapper">
    <TheHeaderAdmin />
    <TheCompanyAdmin />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheMenu from "../components/admin/TheMenu.vue";
import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import TheCategoriesAdmin from "../components/admin/TheCategoriesAdmin.vue";
import TheCompanyAdmin from "../components/admin/TheCompanyAdmin.vue";

export default defineComponent({
  components: { TheMenu, TheHeaderAdmin, TheCompanyAdmin },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
