<template>
  <section class="tab-components">
    <div class="container-fluid">
      <!-- ========== title-wrapper start ========== -->
      <div class="title-wrapper pt-30">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title mb-30">
              <h2>Quản lý sản phẩm</h2>
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
          <div class="col-lg-6">
            <!-- input style start -->
            <div class="card-style mb-30">
              <h6 class="mb-25">tạo mới</h6>
              <InputText
                title="Test"
                placeholder="son nek"
                :value="product.name"
                @update:value="product.name = $event"
              />
              <button @click="handleCheck()">ok</button>
            </div>
          </div>
          <!-- end col -->
          <div class="col-lg-6">
            <!-- ======= textarea style start ======= -->
            <div class="card-style mb-30">
              <!-- end textarea -->
            </div>
          </div>
          <!-- end col -->
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
import InputText from "../input/InputText.vue";
export default defineComponent({
  data() {
    return {
      product: {
        name: "" as string,
      },
    };
  },
  methods: {
    handleCheck() {},
  },

  components: { InputText },
});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
