<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="breadcrumbs-content">
            <h1 class="page-title">Chi tiết sản phẩm</h1>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <ul class="breadcrumb-nav">
            <li>
              <a><i class="lni lni-home"></i> Trang chủ</a>
            </li>
            <li>
              <a>{{ product?.category.name }}</a>
            </li>
            <li>{{ product?.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <section class="item-details section">
    <div class="container">
      <div class="top-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-images">
              <main id="gallery">
                <div class="main-img">
                  <img :src="getUrl" id="current" />
                </div>
                <div class="images">
                  <img :src="getUrl" class="img" />
                </div>
              </main>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <div class="product-info">
              <h2 class="title">{{ product?.name }}</h2>
              <p class="category">
                <i class="lni lni-tag"></i> Phân loại:<a>{{
                  product?.category.name
                }}</a>
              </p>
              <h3 class="price">
                {{ product?.price
                }}<span>{{ getSale == product?.price ? "" : getSale }}</span>
              </h3>
              <p class="info-text">
                {{ product?.description }}
              </p>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group color-option">
                    <label class="title-label" for="size">Màu sắc</label>
                    <div class="single-checkbox checkbox-style-1">
                      <input type="checkbox" id="checkbox-1" checked />
                      <label for="checkbox-1"><span></span></label>
                      <span style="padding-left: 10px">Mặc định</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group quantity">
                    <label for="color">Số lượng</label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="quantity"
                    />
                  </div>
                </div>
              </div>

              <div class="bottom-content">
                <div class="row align-items-end">
                  <div class="col-lg-8 col-md-8 col-12">
                    <div class="button cart-button">
                      <button
                        style="background: #dc3535 !important"
                        class="btn"
                        @click="handleAddProductToCart()"
                      >
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bottom-content">
                <div class="row align-items-end">
                  <div class="col-lg-8 col-md-8 col-12">
                    <div class="button cart-button">
                      <button class="btn" @click="changePage('/cart')">
                        Đến giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ================== -->
            </div>
          </div>
        </div>
      </div>
      <ProductDetailInfo />
      <alert-box
        :content="content"
        :sstyle="style"
        :title="title"
        v-if="show"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { authStore } from "../../store/auth";
import { orderStore } from "../../store/order";
import AlertBox from "../animation/AlertBox.vue";
import ProductDetailInfo from "./ProductDetailInfo.vue";

export default defineComponent({
  props: {
    product: {
      type: Object,
      requied: true,
    },
  },

  data() {
    return {
      quantity: 1 as number,
      content: "" as string,
      style: "" as string,
      title: "" as string,
      show: false as boolean,
    };
  },

  computed: {
    getUrl() {
      const link_full = this.product?.imageUrl;
      const link = link_full.replace(`public`, "");
      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },

    getSale() {
      return (
        this.product?.price - (this.product?.sale * this.product?.price) / 100
      );
    },

    getIdUser() {
      return authStore().user._id;
    },

    getIdCart() {
      return orderStore().cart_default._id;
    },
  },

  methods: {
    changePage(link: any) {
      this.$router.push({ path: `${link}` });
    },

    handleAddProductToCart() {
      orderStore()
        .addProductInOrder(
          this.getIdUser,
          this.getIdCart,
          this.product?._id,
          this.quantity
        )
        .then((res) => {
          this.show = true;
          this.title = " Thành công";
          this.content = `${this.product?.name} - số lượng: ${this.quantity}`;
          this.style = "success";
          setTimeout(() => {
            this.show = false;
          }, 3000);
        })
        .catch((err) => {
          this.show = true;
          this.title = " Có lỗi";
          this.content = `${err}`;
          this.style = "error";
          setTimeout(() => {
            this.show = false;
          }, 3000);
        });
    },
  },

  components: { ProductDetailInfo, AlertBox },
});
</script>

<style></style>
