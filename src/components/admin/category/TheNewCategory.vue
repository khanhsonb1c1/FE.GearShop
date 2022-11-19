<template>
  <div class="col-lg-4">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6 class="mb-25">tạo mới</h6>
      <InputText
        title="Tên danh mục"
        placeholder="..."
        :value="category.name"
        @update:value="category.name = $event"
      />

      <InputText
        title="Mã danh mục"
        placeholder="..."
        :value="category.code"
        @update:value="category.code = $event"
      />

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
import { categoryStore } from "../../../store/category";

export default defineComponent({
  data() {
    return {
      category: {
        name: "" as string,
        code: "" as string,
        imgUrl: null as any,
      } as any,
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.category.imgUrl = event.target.files[0];
    },

    createcategory() {
      const formData = new FormData();
      formData.append("imageUrl", this.category.imgUrl);
      formData.append("name", this.category.name);
      formData.append("category_id", this.category.code);

      this.axios({
        url: "http://localhost:8000/api/category/",
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        categoryStore().getCategoryList();
      });
    },
  },

  components: { InputText, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
