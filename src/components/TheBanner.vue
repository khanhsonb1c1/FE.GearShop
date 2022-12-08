<template>
  <section class="hero-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 custom-padding-right">
          <div class="slider-head">
            <!-- Start Hero Slider -->
            <div class="hero-slider" style="">
              <!-- Start Single Slider -->
              <div class="single-slider">
                <img :src="getUrl(imageList[0].imageUrl)" alt="" />
              </div>
            </div>
            <!-- End Hero Slider -->
          </div>
        </div>

        <!-- ! ===================== -->

        <div class="col-lg-4 col-12">
          <div class="row">
            <div class="col-lg-12 col-md-6 col-12 md-custom-padding">
              <!-- Start Small Banner -->
              <div class="hero-small-banner">
                <img :src="getUrl(imageList[2].imageUrl)" alt="" />
              </div>
              <!-- End Small Banner -->
            </div>
            <div class="col-lg-12 col-md-6 col-12">
              <!-- Start Small Banner -->
              <div class="hero-small-banner">
                <img :src="getUrl(imageList[1].imageUrl)" alt="" />
              </div>
              <!-- Start Small Banner -->
            </div>
          </div>
        </div>

        <!-- ========================= -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { bannerStore } from "../store/banner";

export default defineComponent({
  data() {
    return {};
  },

  created() {
    this.getImg();
  },

  computed: {
    imageList() {
      return bannerStore().banner_default;
    },
  },

  methods: {
    getUrl(linkURL: string) {
      const link_full = linkURL;
      const link = link_full.replace(`public`, "");
      return `${import.meta.env.VITE_APP_GEARSHOP}` + link;
    },

    getImg() {
      if (bannerStore().banner_default[0]._id == "") {
        bannerStore().getBannerDefault();
      }
    },
  },
});
</script>

<style></style>
