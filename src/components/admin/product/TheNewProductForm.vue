<template>
  <div class="col-lg-4">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6 class="mb-25">tạo mới</h6>
      <InputText
        title="Tên sản phẩm"
        placeholder="..."
        :value="product.name"
        @update:value="product.name = $event"
      />

      <InputText
        title="Mã sản phẩm"
        placeholder="..."
        :value="product.name"
        @update:value="product.name = $event"
      />

      <InputText
        title="Giá "
        placeholder="..."
        :value="product.name"
        @update:value="product.name = $event"
      />

      <InputText
        title="Số lượng trong kho"
        placeholder="..."
        :value="product.name"
        @update:value="product.name = $event"
      />

      <InputSelection
        title="Nhóm sản phẩm"
        placeholder="..."
        :value="product.categoty"
        @update:value="product.categoty = $event"
      />

      <InputSelection
        title="Thương hiệu"
        placeholder="..."
        :value="product.categoty"
        @update:value="product.categoty = $event"
      />

      <InputTextArea
        title="Mô tả"
        placeholder="..."
        :value="product.company"
        @update:value="product.company = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputSelection from "../../input/InputSelection.vue";
import InputText from "../../input/InputText.vue";
import InputTextArea from "../../input/InputTextArea.vue";
export default defineComponent({
  data() {
    return {
      product: {
        name: "" as string,
        code: "" as string,
        quantity: 0 as number,
        categoty: "" as string,
        company: "" as string,
        price: 0 as number,
        discount: 0 as number,
      },
    };
  },
  methods: {},

  components: { InputText, InputTextArea, InputSelection },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
