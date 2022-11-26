<template>
  <section class="tab-components">
    <div class="container-fluid">
      <div class="title-wrapper pt-30">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title mb-30">
              <h2>Quản lý khách hàng</h2>
            </div>
          </div>
          <div class="col-md-6">
            <div class="breadcrumb-wrapper mb-30">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#0">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item"><a href="#0">Forms</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Form Elements
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="form-elements-wrapper">
        <div class="row">
          <!-- ! component here -->
          <TheTableUser />
        </div>
        <!-- end row -->
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import TheTableUser from "./TheTableUser.vue";

export default defineComponent({
  components: { TheTableUser },
});
</script>
  
  <style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
  