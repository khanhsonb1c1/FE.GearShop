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
      const { $cookies }: any = this;
      if ($cookies.get("access_token") && $cookies.get("user_info")) {
        this.getData();
      }
    },
    getData() {
      const { $cookies }: any = this;
      authStore().setDefault(
        $cookies.get("access_token"),
        $cookies.get("user_info")
      );
    },

    logout() {
      const { $cookies }: any = this;
      authStore().setDefault(
        $cookies.set("access_token", null),
        $cookies.set("user_info", {})
      );
    },
  },
});
</script>
