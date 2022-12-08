<template>
  <header class="header navbar-area" style="padding: 0 !important">
    <!-- Start Topbar -->
    <div class="topbar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-4 col-12">
            <div class="top-middle">
              <ul class="useful-links">
                <li @click="changePage('/')"><a>Trang chủ</a></li>
                <li @click="changePage('/product')"><a>Sản phẩm</a></li>
                <li><a>Giới thiệu</a></li>
                <li @click="changePage('/blog')"><a>Blog</a></li>
                <li><a>Bảo hành</a></li>
                <li><a>Liên hệ</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-12">
            <div class="top-end">
              <ul class="user-login">
                <li @click="changePage('/admin')" v-if="getRole == 'admin'">
                  <a>Quản lý</a>
                </li>
                <li
                  v-if="getName != '' || getName != null"
                  @click="changePage('/auth')"
                >
                  <a>{{ getName }}</a>
                </li>
                <li
                  @click="changePage('/login')"
                  v-if="
                    getName == null || getName == '' || getName == undefined
                  "
                >
                  <a>Sign In</a>
                </li>
                <li @click="logout()">
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Topbar -->
    <!-- Start Header Middle -->
    <div class="header-middle">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-md-3 col-7" @click="changePage('/')">
            <!-- Start Header Logo -->
            <a class="navbar-brand">
              <img src="../../public/logo_gearshop.png" alt="Logo" />
            </a>
            <!-- End Header Logo -->
          </div>

          <SearchProduct />

          <div class="col-lg-4 col-md-2 col-5">
            <div class="middle-right-area">
              <div class="nav-hotline">
                <i class="lni lni-phone"></i>
                <h3>
                  Hotline:
                  <span>(+84) 123 456 7890</span>
                </h3>
              </div>
              <div class="navbar-cart">
                <div class="wishlist">
                  <a href="javascript:void(0)">
                    <i class="lni lni-heart"></i>
                    <span class="total-items">0</span>
                  </a>
                </div>
                <div class="cart-items">
                  <a href="javascript:void(0)" class="main-btn">
                    <i class="lni lni-cart"></i>
                    <span class="total-items">{{ number_item_in_order }}</span>
                  </a>

                  <!--! Shopping Item -->
                  <CartItemPopup />
                  <!--/ End Shopping Item -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Header Middle -->
    <!-- Start Header Bottom -->
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 col-md-6 col-12">
          <div class="nav-inner">
            <!-- Start Mega Category Menu -->
            <div class="mega-category-menu">
              <span class="cat-button"
                ><i class="lni lni-menu"></i>Danh mục sản phẩm</span
              >
              <ul class="sub-category">
                <li v-for="(item, index) in categories" :key="index">
                  <a>{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <!-- End Mega Category Menu -->
            <!-- Start Navbar -->
            <nav class="navbar navbar-expand-lg">
              <button
                class="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="active" aria-label="Toggle navigation"
                      >Trang chủ</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-2"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      >danh mục</a
                    >
                    <ul class="sub-menu collapse" id="submenu-1-2">
                      <li
                        class="nav-item"
                        v-for="(item, index) in categories"
                        :key="index"
                      >
                        <a>{{ item.name }}</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-3"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      >Thương hiệu</a
                    >
                    <ul class="sub-menu collapse" id="submenu-1-3">
                      <li
                        class="nav-item"
                        v-for="(item, index) in companies"
                        :key="index"
                      >
                        <a>{{ item.name }}</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="dd-menu collapsed"
                      href="javascript:void(0)"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu-1-4"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      >Dịch vụ</a
                    >
                    <ul class="sub-menu collapse" id="submenu-1-4">
                      <li class="nav-item">
                        <a>Bảo hành</a>
                      </li>
                      <li class="nav-item">
                        <a>Liên hệ</a>
                      </li>
                      <li class="nav-item">
                        <a>Vận chuyển</a>
                      </li>

                      <li class="nav-item">
                        <a>Giới thiệu</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a aria-label="Toggle navigation">Blog</a>
                  </li>
                </ul>
              </div>
              <!-- navbar collapse -->
            </nav>
            <!-- End Navbar -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
          <!-- Start Nav Social -->
          <div class="nav-social">
            <h5 class="title">Mạng xã hội:</h5>
            <ul>
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
            </ul>
          </div>
          <!-- End Nav Social -->
        </div>
      </div>
    </div>
    <!-- End Header Bottom -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { authStore } from "../store/auth";
import { categoryStore } from "../store/category";
import { companyStore } from "../store/company";
import { orderStore } from "../store/order";
import CartItemPopup from "./CartItemPopup.vue";
import SearchProduct from "./product/SearchProduct.vue";

export default defineComponent({
  components: { CartItemPopup, SearchProduct },
  computed: {
    categories() {
      return categoryStore().category_list;
    },

    companies() {
      return companyStore().company_list;
    },

    getName() {
      return authStore().user.full_name;
    },

    getRole() {
      return authStore().user.role;
    },

    id() {
      return authStore().user._id;
    },

    number_item_in_order() {
      return orderStore().number_order;
    },
  },

  watch: {},

  created() {
    this.checkCate();
    this.checkCompa();
  },

  methods: {
    changePage(link: any) {
      this.$router.push({ path: `${link}` });
    },

    logout() {
      const { $cookies }: any = this;
      authStore().setDefault("", {});
      $cookies.set("access_token", "");
      $cookies.set("user_info", {});
    },

    checkCate() {
      if (categoryStore().category_list[0]._id == "") {
        this.getCategory();
      }
    },

    checkCompa() {
      if (companyStore().company_list[0]._id == "") {
        this.getCompany();
      }
    },

    getCategory() {
      categoryStore()
        .getCategoryList()
        .then((res) => {
          console.log(res);
        });
    },

    getCompany() {
      companyStore().getcompanyList();
    },
  },
});
</script>

<style></style>
