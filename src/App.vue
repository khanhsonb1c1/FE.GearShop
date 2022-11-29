<template>
  <div class="body">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import { authStore } from "./store/auth";
export default defineComponent({
  mounted() {
    this.check();
  },
  methods: {
    check() {
      if (this.$cookies.get("access_token") && this.$cookies.get("user_info")) {
        this.getData();
      }
    },
    getData() {
      authStore().setDefault(
        this.$cookies.get("access_token"),
        this.$cookies.get("user_info")
      );
    },

    logout() {
      authStore().setDefault(
        this.$cookies.set("access_token", null),
        this.$cookies.set("user_info", {})
      );
    },
  },
});
</script>
