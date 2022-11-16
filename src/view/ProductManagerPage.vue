<template>
    <TheMenu />
    <main class="main-wrapper">
      <TheHeaderAdmin />
     <TheProductAdmin/>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import TheMenu from "../components/admin/TheMenu.vue";
  import TheHeaderAdmin from "../components/admin/TheHeaderAdmin.vue";
  import TheProductAdmin from "../components/admin/TheProductAdmin.vue"

  
  export default defineComponent({
    components: { TheMenu, TheHeaderAdmin ,TheProductAdmin},
  });
  </script>
  
  <style scoped>
  @import url("../assets/assets/css/main.css");
  </style>
  