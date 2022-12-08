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
      category: {
        status: 4 as number,
        imgUrl: null as any,
      },
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.category.imgUrl = event.target.files[0];
    },

    createcategory() {
      const formData = new FormData();
      formData.append("imageUrl", this.category.imgUrl);

      this.axios({
        url: "http://localhost:8000/api/banner",
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
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
