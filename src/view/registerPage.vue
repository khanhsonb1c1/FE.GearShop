<template>
  <TheHeader />
  <section class="signin-section">
    <div class="container" style="padding-top: 30px">
      <div class="row g-0 auth-row">
        <div class="col-lg-6">
          <div class="auth-cover-wrapper bg-primary-100">
            <div class="auth-cover">
              <div class="title text-center">
                <h1 class="text-primary mb-10">Welcome to Gearshop</h1>
                <p class="text-medium">
                  Sign in to your Existing account to continue
                </p>
              </div>
              <div class="cover-image">
                <img
                  src="../assets/assets/images/auth/signin-image.svg"
                  alt=""
                />
              </div>
              <div class="shape-image">
                <img src="../assets/assets/images/auth/shape.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-lg-6">
          <div class="signin-wrapper">
            <div class="form-wrapper">
              <h3 class="mb-15" style="text-align: center">Đăng ký</h3>

              <form action="#">
                <div class="row">
                  <div class="col-12">
                    <div class="input-style-1">
                      <label>Họ và tên</label>
                      <input
                        type="text"
                        placeholder="Tên đầy đủ"
                        v-model="full_name"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-style-1">
                      <label>Tài khoản</label>
                      <input
                        type="text"
                        placeholder="tên tài khoản"
                        v-model="user_name"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-style-1">
                      <label>Email</label>
                      <input type="email" placeholder="Email" v-model="email" />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-style-1">
                      <label>SĐT</label>
                      <input type="text" placeholder="SĐT" v-model="phone" />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-style-1">
                      <label>Địa chỉ</label>
                      <input
                        type="text"
                        placeholder="Tỉnh - Quận/Huyện - Phường/Xã"
                        v-model="address"
                      />
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-12">
                    <div class="input-style-1">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        placeholder="Mật khẩu"
                        v-model="password"
                      />
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-xxl-6 col-lg-12 col-md-6">
                    <div class="form-check checkbox-style mb-30">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="checkbox-remember"
                      />
                      <label class="form-check-label" for="checkbox-remember">
                        Đồng ý với các thông tin trên</label
                      >
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-xxl-6 col-lg-12 col-md-6">
                    <div
                      class="text-start text-md-end text-lg-start text-xxl-end mb-30"
                    >
                      <a class="hover-underline">Quên mật khẩu ?</a>
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-12">
                    <div
                      class="button-group d-flex justify-content-center flex-wrap"
                    >
                      <div
                        @click="handleRegister()"
                        class="main-btn primary-btn btn-hover w-100 text-center"
                      >
                        Đăng ký
                      </div>
                      <p v-if="err != ''">{{ err }}</p>
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </form>
              <div class="singin-option pt-40">
                <p class="text-sm text-medium text-center text-gray">
                  Đăng nhập với
                </p>
                <div
                  class="button-group pt-40 pb-40 d-flex justify-content-center flex-wrap"
                >
                  <button class="main-btn primary-btn-outline m-2">
                    <i class="lni lni-facebook-filled mr-10"></i>
                    Facebook
                  </button>
                  <button class="main-btn danger-btn-outline m-2">
                    <i class="lni lni-google mr-10"></i>
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "../components/TheHeader.vue";
import { account, user } from "../service/auth";

export default defineComponent({
  name: "register-page-view",
  data() {
    return {
      email: "",
      password: "",
      address: "",
      phone: "",
      full_name: "",
      user_name: "",
      title: "" as string,
      err: "" as string,
    };
  },
  methods: {
    handleRegister() {
      account
        .register({
          email: this.email,
          phone: this.phone,
          password: this.password,
          address_detail: this.address,
          full_name: this.full_name,
          user_name: this.user_name,
        })
        .then((res) => {
          this.title = "Create account successfully !";
        })
        .catch((err) => {
          this.err = err;
        });
    },
  },
  components: { TheHeader },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
