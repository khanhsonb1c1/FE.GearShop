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
      <h6 class="mb-25">Chỉnh sửa sản phẩm</h6>
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
      <ButtonField title="Tạo mới" @handleClick="createProduct" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputSelection from "../../input/InputSelection.vue";
import InputText from "../../input/InputText.vue";
import InputTextArea from "../../input/InputTextArea.vue";
import ButtonField from "../../button/Button.vue";
import { productStore } from "../../../store/product";
import { categoryStore } from "../../../store/category";
import { product } from "../../../service/product";
import { category } from "../../../service/category";

export default defineComponent({
  data() {
    return {
      category: {
        name: "" as string,
        code: "" as string,
      } as any,
    };
  },

  props: {
    item: {
      type: Object,
    },
  },

  mounted() {
    this.category.name = this.item?.name;
    this.category.code = this.item?.product_id;
  },

  computed: {},

  methods: {
    handleClose() {
      productStore().changeShowForm();
    },

    close() {
      this.$emit("handleClose");
    },

    createProduct() {
      category
        .update(this.item?._id, {
          name: this.category.name,
          category_id: this.category.code,
        })

        .then((res) => {
          categoryStore().getCategoryList();
          this.$emit("handleClose");
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
