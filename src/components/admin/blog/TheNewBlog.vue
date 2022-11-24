<template>
  <div class="col-lg-5">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6 class="mb-25">Bài viết</h6>
      <InputText
        title="Tiêu đề"
        placeholder="..."
        :value="blog_detail.title"
        @update:value="blog_detail.title = $event"
      />

      <InputText
        title="Mô tả"
        placeholder="..."
        :value="blog_detail.description"
        @update:value="blog_detail.description = $event"
      />
      <InputText
        title="Nội dung"
        placeholder="Tiêu đề 1"
        :value="blog_detail.title1"
        @update:value="blog_detail.title1 = $event"
      />

      <InputTextArea
        placeholder="Nội dung 1"
        :value="blog_detail.content1"
        @update:value="blog_detail.content1 = $event"
      />

      <InputText
        placeholder="Tiêu đề 2"
        :value="blog_detail.title2"
        @update:value="blog_detail.title2 = $event"
      />

      <InputTextArea
        placeholder="Nội dung 2"
        :value="blog_detail.content2"
        @update:value="blog_detail.content2 = $event"
      />

      <div class="input-style-1">
        <label>Ảnh</label>
        <input type="file" @change="onFileSelected" />
      </div>

      <InputText
        title="Bài viết cho sản phẩm ( Không bắt buộc )"
        placeholder="Nhập id sản phẩm"
        :value="blog_detail.product"
        @update:value="blog_detail.product = $event"
      />

      <ButtonField title="Tạo mới" @handleClick="createBlog" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputSelection from "../../input/InputSelection.vue";
import InputText from "../../input/InputText.vue";
import InputTextArea from "../../input/InputTextArea.vue";
import ButtonField from "../../button/Button.vue";
import { blogStore } from "../../../store/blog";

export default defineComponent({
  data() {
    return {
      blog_detail: {
        product: "" as string,
        title: "" as string,
        title1: "" as string,
        title2: "" as string,
        content1: "" as string,
        content2: "" as string,
        content3: "" as string,
        created_at: 0 as number,
        description: "" as string,
        imageUrl: "" as string,
      },
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.blog_detail.imageUrl = event.target.files[0];
    },

    createBlog() {
      const formData = new FormData();
      formData.append("imageUrl", this.blog_detail.imageUrl);
      formData.append("title", this.blog_detail.title);
      formData.append("description", this.blog_detail.description);
      formData.append("content1", this.blog_detail.content1);
      formData.append("content2", this.blog_detail.content2);
      formData.append("title2", this.blog_detail.title2);
      formData.append("title1", this.blog_detail.title1);
      formData.append("product", this.blog_detail.product);

      this.axios({
        url: `${import.meta.env.VITE_APP_GEARSHOP}api/blog/`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        blogStore().getBlogList(1);
      });
    },
  },

  components: { InputText, InputTextArea, InputSelection, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
