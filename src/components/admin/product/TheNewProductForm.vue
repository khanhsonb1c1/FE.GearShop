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
        :value="product.code"
        @update:value="product.code = $event"
      />

      <InputText
        title="Giá "
        placeholder="..."
        type="number"
        :value="product.price"
        @update:value="product.price = $event"
      />

      <InputText
        title="Số lượng trong kho"
        placeholder="..."
        type="number"
        :value="product.quantity"
        @update:value="product.quantity = $event"
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
        :value="product.company"
        @update:value="product.company = $event"
      />

      <InputTextArea
        title="Mô tả"
        placeholder="..."
        :value="product.description"
        @update:value="product.description = $event"
      />

      <div class="input-style-1">
        <label>Ảnh</label>
        <input type="file" @change="onFileSelected" />
      </div>

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

export default defineComponent({
  data() {
    return {
      product: {
        name: "" as string,
        code: "" as string,
        quantity: 0 as number,
        category: "6374f62f0ba000a0f4c121ff" as string,
        company: "6374f82cb4eeb4f9486b3e6c" as string,
        price: 0 as number,
        imgUrl: null as any,
        discount: 0 as number,
        description: "" as string,
      } as any,
    };
  },
  methods: {
    onFileSelected(event: any) {
      this.product.imgUrl = event.target.files[0];
    },

    createProduct() {
      const formData = new FormData();
      formData.append("imageUrl", this.product.imgUrl);
      formData.append("name", this.product.name);
      formData.append("product_id", this.product.code);
      formData.append("category", this.product.category);
      formData.append("description", this.product.description);
      formData.append("quantity", this.product.quantity);
      formData.append("discount", this.product.discount);
      formData.append("company", this.product.company);
      formData.append("price", this.product.price);

      this.axios({
        url: "http://localhost:8000/api/product/",
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        productStore().getProductList(1);
      });
    },
  },

  components: { InputText, InputTextArea, InputSelection, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
