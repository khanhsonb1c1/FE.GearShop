<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="breadcrumbs-content">
            <h1 class="page-title">Single Product</h1>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <ul class="breadcrumb-nav">
            <li>
              <a href="index.html"><i class="lni lni-home"></i> Home</a>
            </li>
            <li><a href="index.html">Shop</a></li>
            <li>Single Product</li>
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
                    </div>
                    <div class="single-checkbox checkbox-style-2">
                      <input type="checkbox" id="checkbox-2" />
                      <label for="checkbox-2"><span></span></label>
                    </div>
                    <div class="single-checkbox checkbox-style-3">
                      <input type="checkbox" id="checkbox-3" />
                      <label for="checkbox-3"><span></span></label>
                    </div>
                    <div class="single-checkbox checkbox-style-4">
                      <input type="checkbox" id="checkbox-4" />
                      <label for="checkbox-4"><span></span></label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group">
                    <label for="color">Cấu hình</label>
                    <select class="form-control" id="color">
                      <option>5100 mAh</option>
                      <option>6200 mAh</option>
                      <option>8000 mAh</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                  <div class="form-group quantity">
                    <label for="color">Số lượng</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="quantity"
                    />
                  </div>
                </div>
              </div>
              <div class="bottom-content">
                <div class="row align-items-end">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="button cart-button">
                      <button class="btn" style="width: 100%">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="wish-button">
                      <button class="btn">
                        <i class="lni lni-reload"></i> Compare
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="wish-button">
                      <button class="btn">
                        <i class="lni lni-heart"></i> To Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-details-info">
        <div class="single-block">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="info-body custom-responsive-margin">
                <h4>Mô tả</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat.
                </p>
                <h4>Tính năng</h4>
                <ul class="features">
                  <li>Capture 4K30 Video and 12MP Photos</li>
                  <li>Game-Style Controller with Touchscreen</li>
                  <li>View Live Camera Feed</li>
                  <li>Full Control of HERO6 Black</li>
                  <li>Use App for Dedicated Camera Operation</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="info-body">
                <h4>Thông số</h4>
                <ul class="normal-list">
                  <li><span>Khối lượng:</span> 35.5oz (1006g)</li>
                  <li><span>Chất liệu:</span> 35 mph (15 m/s)</li>
                  <li><span>Kết nối:</span> 35 mph (15 m/s)</li>
                  <li><span>Keycap:</span> 35 mph (15 m/s)</li>
                  <li><span>Switch:</span> 35 mph (15 m/s)</li>
                  <li><span>Tốc độ phản hồi:</span> Up to 9,840ft (3,000m)</li>
                  <li><span>Công nghệ:</span> 2.4GHz</li>
                  <li><span>Tính năng khác:</span> GoPro, USA</li>
                </ul>
                <h4>Bảo hành:</h4>
                <ul class="normal-list">
                  <li><span>Chính hãng:</span> Theo nhà sản xuất.</li>
                  <li>
                    <span>Bảo hành của shop:</span> 12 tháng, miễn phí đổi trả
                    trong vòng 7 ngày.
                  </li>
                  <li>
                    <span>Bảo hành tận nhà:</span> Khi mua gói bảo hành vàng.
                  </li>
                  <li><span>Tổng đài hỗ trợ 24/7:</span> 1900.0000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  },

  methods: {
    handleAddProductToCart() {},
  },
});
</script>

<style></style>
