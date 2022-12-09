<template>
  <div class="col-lg-4">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6 class="mb-25">tạo mới</h6>

      <div class="input-style-1">
        <label>Ảnh</label>
        <input type="file" @change="onFileSelected" />
      </div>

      <ButtonField title="Tạo mới" @handleClick="createcategory" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputText from "../../input/InputText.vue";
import ButtonField from "../../button/Button.vue";
import { bannerStore } from "../../../store/banner";

export default defineComponent({
  data() {
    return {
      imgUrl: null as any,
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.imgUrl = event.target.files[0];
    },

    createcategory() {
      const formData = new FormData();
      formData.append("imageUrl", this.imgUrl);

      this.axios({
        url: `${import.meta.env.VITE_APP_GEARSHOP}api/banner/`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      }).then((res) => {
        bannerStore().getBannerList(1, "");
      });
    },
  },

  components: { InputText, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
