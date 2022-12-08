<template>
  <TheHeader />
  <TheAuthPage />
  <TheFooter />
</template>

<script lang="ts">
import TheAuthPage from "../components/auth/TheAuthPage.vue";
import TheFooter from "../components/TheFooter.vue";
import TheHeader from "../components/TheHeader.vue";

export default { components: { TheHeader, TheAuthPage, TheFooter } };
</script>

<style></style>
