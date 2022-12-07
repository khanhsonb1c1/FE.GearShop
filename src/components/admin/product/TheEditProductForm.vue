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
        :list="categories"
        :value="product.category"
        @update:value="product.category = $event"
      />

      <InputSelection
        title="Thương hiệu"
        :list="companies"
        :value="product.company"
        @update:value="product.company = $event"
      />

      <InputTextArea
        title="Mô tả"
        placeholder="..."
        :value="product.description"
        @update:value="product.description = $event"
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
import { companyStore } from "../../../store/company";
import { product } from "../../../service/product";

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

  props: {
    item: {
      type: Object,
    },
  },

  mounted() {
    this.product.name = this.item?.name;
    this.product.code = this.item?.product_id;
    this.product.category = this.item?.category._id;
    this.product.price = this.item?.price;
    this.product.discount = this.item?.sale;
    this.product.description = this.item?.description;
    this.product.company = this.item?.company._id;
    this.product.quantity = this.item?.quantity;
  },

  computed: {
    categories() {
      return categoryStore().category_list;
    },

    companies() {
      return companyStore().company_list;
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

    close() {
      this.$emit("handleClose");
    },

    createProduct() {
      product
        .update(this.item?._id, {
          quantity: this.product.quantity,
          name: this.product.name,
          price: this.product.price,
          sale: this.product.discount,
          product_id: this.product.code,
          category: this.product.category,
          company: this.product.company,
          description: this.product.description,
        })

        .then((res) => {
          productStore().getProductList(1, "created_at", "", "");
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
