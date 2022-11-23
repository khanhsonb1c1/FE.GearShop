<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Bài viết</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Start Single Product -->
          <div class="single-product">
            <div class="product-image">
              <img src="../../assets/images/products/product-1.jpg" />
              <div class="button">
                <a class="btn"><i class="lni lni-search"></i> Xem thêm</a>
              </div>
            </div>
            <div class="product-info">
              <span class="category" style="color: red">12-12-2022</span>
              <h5 class="title" style="color: blue">What is Lorem Ipsum?</h5>

              <div class="price">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
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
  data() {
    return {
      page: 1 as number,
    };
  },

  components: {},
});
</script>
  
  <style></style>
  