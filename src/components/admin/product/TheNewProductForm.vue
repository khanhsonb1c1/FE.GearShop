<template>
  <div class="col-lg-8 show_form" v-if="show">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6
        class="close_btn"
        style="float: right; color: red; cursor: pointer"
        @click="handleClose()"
      >
        X
      </h6>
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
        title="Giảm giá (%)"
        placeholder="..."
        type="number"
        :value="product.discount"
        @update:value="product.discount = $event"
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
        nameList="category"
        :value="product.category"
        @update:value="product.category = $event"
      />

      <InputSelection
        title="Thương hiệu"
        nameList="company"
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
import { categoryStore } from "../../../store/category";
import { companyStore } from "../../../store/company";

export default defineComponent({
  data() {
    return {
      product: {
        name: "" as string,
        code: "" as string,
        quantity: 0 as number,
        category: "" as string,
        company: "" as string,
        price: 0 as number,
        imgUrl: null as any,
        discount: 0 as number,
        description: "" as string,
      } as any,
    };
  },

  computed: {
    categories() {
      return categoryStore().category_list;
    },

    companies() {
      return companyStore().company_list;
    },
    show() {
      return productStore().showForm;
    },
  },

  created() {
    this.checkCate();
    this.checkCompa();
  },
  methods: {
    handleClose() {
      productStore().changeShowForm();
    },
    checkCate() {
      if (categoryStore().category_list[0]._id == "") {
        categoryStore().getCategoryList();
      }
    },

    checkCompa() {
      if (companyStore().company_list[0]._id == "") {
        companyStore().getcompanyList();
      }
    },

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
      formData.append("sale", this.product.discount);
      formData.append("company", this.product.company);
      formData.append("price", this.product.price);

      this.axios({
        url: `${import.meta.env.VITE_APP_GEARSHOP}api/product/`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        productStore().getProductList(1, "created_at", "", "", "");
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
