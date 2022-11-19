<template>
  <section class="tab-components">
    <div class="container-fluid">
      <!-- ========== title-wrapper start ========== -->
      <div class="title-wrapper pt-30">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title mb-30">
              <h2>Quản lý nhà cung cấp</h2>
            </div>
          </div>
          <!-- end col -->
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
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- ========== title-wrapper end ========== -->

      <!-- ========== form-elements-wrapper start ========== -->
      <div class="form-elements-wrapper">
        <div class="row">
          <TheNewCompany />
          <TheCompanyTable />
        </div>
        <!-- end row -->
      </div>
      <!-- ========== form-elements-wrapper end ========== -->
    </div>
    <!-- end container -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheCompanyTable from "./company/TheCompanyTable.vue";
import TheNewCompany from "./company/TheNewCompany.vue";
export default defineComponent({
  components: {
    TheNewCompany,
    TheCompanyTable,
  },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
