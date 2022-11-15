<template>
  <div class="contai_main">
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup" v-show="showFormResetPass">
        <form>
          <label for="chk" aria-hidden="true">Đăng nhập</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email"
          />
          <input
            type="Password"
            name="pswd"
            placeholder="Mật khẩu"
            v-model="password"
          />
          <span @click="showFormResetPass = !showFormResetPass"
            >Quên mật khẩu ?</span
          >
          <button type="submit">Đăng nhập</button>
          <!-- <div class="wrapper_icon">
            <img src="https://img.icons8.com/ios-filled/35/null/mac-os.png" />
            <img src="https://img.icons8.com/fluency/35/null/google-logo.png" />
          </div> -->
        </form>
      </div>

      <div class="signup" v-show="!showFormResetPass">
        <form>
          <label
            aria-hidden="true"
            @click="showFormResetPass = !showFormResetPass"
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            Quên mật khẩu</label
          >
          <input
            type="email"
            name="email"
            placeholder="Nhập Email"
            v-model="emailchange"
          />

          <button type="submit">Xác nhận</button>

          <span @click="showFormResetPass = !showFormResetPass">
            Về trang Đăng Nhập.</span
          >
        </form>
      </div>

      <div class="login">
        <form>
          <label for="chk" aria-hidden="true">Đăng ký</label>
          <input
            type="text"
            name="text"
            placeholder="Họ và Tên"
            required
            disabled
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            disabled
          />
          <input
            type="number"
            name="phone"
            placeholder="Số điện thoại"
            required
            disabled
          />
          <input
            type="Password"
            name="pswd"
            placeholder="Mật khẩu"
            required
            disabled
          />
          <input
            type="Password"
            name="pswd"
            placeholder="Nhập lại mật khẩu"
            required
            disabled
          />
          <button disabled>Đăng ký</button>
        </form>
      </div>
    </div>
  </div>

  <!-- <AlertErrRegister v-if="error" :title="error" @handleClose="handleCloseErr" /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { useAuthStore } from "@/stores/auth";
// import TheHeader from "../components/TheHeader.vue";
// import AlertErrRegister from "@/components/output/alertErrRegister.vue";

export default defineComponent({
  name: "login-page-view",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      showFormRegister: false,
      showFormResetPass: true,
      emailchange: "",
    };
  },
  methods: {
    handleCloseErr() {
      this.error = "";
    },
    handleClose() {
      this.showFormRegister = false;
      this.showFormResetPass = false;
    },
  },
});
</script>

<style scoped>
.contai_main {
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  /* background: linear-gradient(to bottom, #fff, #f2f3da, #f2f6b7); */
}

.main {
  width: 375px;
  height: 700px;
  background: red;
  overflow: hidden;
  background: url("../assets/img/logo.jpg") no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}

#chk {
  display: none;
}
.wrapper_icon {
  width: 80%;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  transition: 0.6s ease;
  cursor: pointer;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: baseline;
}
img {
  margin: 0 20px;
}

i {
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
span {
  width: 80%;
  justify-content: flex-start;
  display: flex;
  margin: 20px auto;
  transition: 0.6s ease;
  cursor: pointer;
  font-size: 16px;
}

span:hover {
  color: #fff;
}

.signup {
  position: relative;
  width: 100%;
  height: 100%;
  animation: fadeIn linear 0.6s;
}

label {
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.6s ease-in-out;
}

input {
  width: 80%;
  height: 40px;
  background: #fff;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button {
  width: 80%;
  height: 40px;
  margin: 10px auto;

  justify-content: center;
  display: block;
  color: #fff;
  background: #4f2895;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.3s ease-in;
}

button:hover {
  background: #2a1355;
}
.login {
  height: 650px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.6s ease-in-out;
}

.login label {
  color: #573b8a;
  transform: scale(0.6);
  padding-top: 10px;
}

#chk:checked ~ .login {
  transform: translateY(-700px);
}

#chk:checked ~ .login label {
  transform: scale(1);
}

#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
