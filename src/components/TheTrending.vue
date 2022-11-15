<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Trending Product</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <!-- Start Single Product -->
          <div class="single-product">
            <div class="product-image">
              <img src="../assets/images/products/product-1.jpg" />
              <div class="button">
                <a href="product-details.html" class="btn"
                  ><i class="lni lni-cart"></i> Add to Cart</a
                >
              </div>
            </div>
            <div class="product-info">
              <span class="category">Watches</span>
              <h4 class="title">
                <a href="product-grids.html">Xiaomi Mi Band 5</a>
              </h4>
              <ul class="review">
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star-filled"></i></li>
                <li><i class="lni lni-star"></i></li>
                <li><span>4.0 Review(s)</span></li>
              </ul>
              <div class="price">
                <span>$199.00</span>
              </div>
            </div>
          </div>
          <!-- End Single Product -->
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style></style>
