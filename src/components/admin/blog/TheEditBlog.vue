<template>
  <div class="col-lg-8 show_form">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6
        class="close_btn"
        style="float: right; color: red; cursor: pointer"
        @click="close()"
      >
        X
      </h6>
      <h6 class="mb-25">Chỉnh sửa bài viết</h6>
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

      <ButtonField title="Tạo mới" @click="createBlog()" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputSelection from "../../input/InputSelection.vue";
import InputText from "../../input/InputText.vue";
import InputTextArea from "../../input/InputTextArea.vue";
import ButtonField from "../../button/Button.vue";
import { blog } from "../../../service/blog";
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

  props: {
    item: {
      type: Object,
    },
  },

  mounted() {
    this.blog_detail.title = this.item?.title;
    this.blog_detail.title1 = this.item?.title1;
    this.blog_detail.title2 = this.item?.title2;
    this.blog_detail.content1 = this.item?.content1;
    this.blog_detail.content2 = this.item?.content2;
    this.blog_detail.content3 = this.item?.content3;
    this.blog_detail.description = this.item?.description;
  },

  computed: {},

  methods: {
    close() {
      this.$emit("handleClose");
    },

    createBlog() {
      blog
        .update(this.item?._id, {
          title: this.blog_detail.title,
          title1: this.blog_detail.title1,
          title2: this.blog_detail.title2,
          content1: this.blog_detail.content1,
          content2: this.blog_detail.content2,
          content3: this.blog_detail.content3,
          description: this.blog_detail.description,
        })
        .then((res) => {
          blogStore().getBlogList(1);
          this.close();
        });
    },
  },

  components: { InputText, InputTextArea, InputSelection, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");

.show_form {
  position: fixed !important;
  max-height: 100vh;
  overflow-y: scroll;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 100;
}
</style>
