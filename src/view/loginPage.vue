<template>
  <div>
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
                <h3 class="mb-15" style="text-align: center">Đăng nhập</h3>

                <form action="#">
                  <div class="row">
                    <div class="col-12">
                      <div class="input-style-1">
                        <label>Tên đăng nhập</label>
                        <input
                          type="text"
                          placeholder="Tên đăng nhập"
                          v-model="user_name"
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

                    <div class="col-xxl-6 col-lg-12 col-md-6">
                      <div
                        class="text-start text-md-end text-lg-start text-xxl-end mb-30"
                      >
                        <a class="hover-underline" style="float: left"
                          >Quên mật khẩu ?</a
                        >
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-12">
                      <div
                        class="button-group d-flex justify-content-center flex-wrap"
                      >
                        <div
                          @click="handleLogin()"
                          class="main-btn primary-btn btn-hover w-100 text-center"
                        >
                          Đăng nhập
                        </div>
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
      <alert-box :content="err" sstyle="error" title="Có lỗi" v-if="showErr" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlertBox from "../components/animation/AlertBox.vue";
import TheHeader from "../components/TheHeader.vue";
import { authStore } from "../store/auth";

export default defineComponent({
  name: "login-page-view",
  data() {
    return {
      user_name: "",
      password: "",
      err: "",
      showErr: false,
    };
  },
  methods: {
    handleLogin() {
      authStore()
        .login(this.user_name, this.password)
        .then((res) => {
          this.$cookies.set("access_token", res);
          this.$cookies.set("user_info", authStore().user);
          this.$router.push({ path: "home" });
        })
        .catch((err) => {
          this.err = "Tài khoản hoặc mật khẩu không chính xác";
          this.showErr = true;
          setTimeout(() => {
            this.showErr = false;
          }, 3000);
        });
    },
  },
  components: { TheHeader, AlertBox },
});
</script>

<style scoped>
@import url("../assets/assets/css/main.css");
</style>
