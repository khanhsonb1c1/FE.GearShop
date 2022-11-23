<template>
  <TheHeader />
  <TheBlog />
  <TheFooter />
</template>
    
    <script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheBlog from "../components/blog/TheBlog.vue";

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    TheBlog,
  },
});
</script>
    