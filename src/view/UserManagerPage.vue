<template>
    <TheMenu />
    <main class="main-wrapper">
      <TheHeaderAdmin />
      <TheUserAdmin/>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import TheMenu from "../components/admin/TheMenu.vue";
  import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
import TheUserAdmin from "../components/admin/user/TheUserAdmin.vue";

  
  export default defineComponent({
    components: { TheMenu, TheHeaderAdmin, TheUserAdmin },
  });
  </script>
  
  <style scoped>
  @import url("../assets/assets/css/main.css");
  </style>
  