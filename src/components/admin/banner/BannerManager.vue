<template>
  <section class="tab-components">
    <div class="container-fluid">
      <div class="title-wrapper pt-30">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title mb-30">
              <h2>Quản lý Banner</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="form-elements-wrapper">
        <div class="row">
          <NewBanner />
          <BannerTable />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BannerTable from "./bannerTable.vue";
import NewBanner from "./NewBanner.vue";

export default defineComponent({
  components: { BannerTable, NewBanner },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
