<template>
  <footer class="footer">
    <!-- Start Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="inner-content">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-12">
              <div class="footer-logo">
                <a >
                  <img src="../assets/images/logo/white-logo.svg" alt="#" />
                </a>
              </div>
            </div>
            <div class="col-lg-9 col-md-8 col-12">
              <div class="footer-newsletter">
                <h4 class="title">
                  Theo dõi bản tin của chúng tôi

                  <span>Nhận tất cả các thông tin mới nhất, Bán hàng và Ưu đãi.</span>
                </h4>
                <div class="newsletter-form-head">
                  <form
                    action="#"
                    method="get"
                    target="_blank"
                    class="newsletter-form"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Địa chỉ email..."
                      type="email"
                    />
                    <div class="button">
                      <button class="btn">
                        Gửi<span class="dir-part"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Top -->
    <!-- Start Footer Middle -->
    <div class="footer-middle">
      <div class="container">
        <div class="bottom-inner">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-contact">
                <h3>Liên hệ</h3>
                <p class="phone">SĐT: +1 (900) 33 169 7720</p>
                <ul>
                  <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                  <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
                </ul>
                <p class="mail">
                  <a href="mailto:support@shopgrids.com"
                    >support@shopgrids.com</a
                  >
                </p>
              </div>
              <!-- End Single Widget -->
            </div>
          
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-link">
                <h3>Thông tin</h3>
                <ul>
                  <li><a href="javascript:void(0)">About Us</a></li>
                  <li><a href="javascript:void(0)">Contact Us</a></li>
                  <li><a href="javascript:void(0)">Downloads</a></li>
                  <li><a href="javascript:void(0)">Sitemap</a></li>
                  <li><a href="javascript:void(0)">FAQs Page</a></li>
                </ul>
              </div>
              <!-- End Single Widget -->
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-link">
                <h3>Danh mục</h3>
                <ul>
                  <li v-for="(item, index) in categories" :key="index">
                    <a href="javascript:void(0)">{{item.name}}</a>
                  </li>
                  
                </ul>
              </div>
            </div>


            <div class="col-lg-3 col-md-6 col-12">
              <!-- Single Widget -->
              <div class="single-footer f-link">
                <h3>Đối tác</h3>
                <ul>
                  <li v-for="(item, index) in companies" :key="index">
                    <a href="javascript:void(0)">{{item.name}}</a>
                  </li>
                  
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Middle -->
    <!-- Start Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="inner-content">
          <div class="row align-items-center">
            <div class="col-lg-4 col-12">
             
            </div>
            <div class="col-lg-4 col-12">
              <div class="copyright">
                <p>
                  Designed and Developed by<a
                   
                    target="_blank"
                    >khanh son</a
                  >
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <ul class="socila">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="lni lni-facebook-filled"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="lni lni-twitter-original"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="lni lni-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="lni lni-google"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Bottom -->
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { categoryStore } from "../store/category";
import { companyStore } from "../store/company";

export default defineComponent({
  computed: {
    categories() {
      return categoryStore().category_list;
    },

    companies() {
      return companyStore().company_list;
    },
  }
});
</script>

<style></style>
