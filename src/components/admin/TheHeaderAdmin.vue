<template>
  <!-- ========== header start ========== -->
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-6">
          <div class="header-left d-flex align-items-center">
            <div class="menu-toggle-btn mr-20">
              <button id="menu-toggle" class="main-btn primary-btn btn-hover">
                <i class="lni lni-chevron-left me-2"></i> Menu
              </button>
            </div>
            <div class="header-search d-none d-md-flex">
              <form action="#">
                <input type="text" placeholder="Search..." />
                <button><i class="lni lni-search-alt"></i></button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-6">
          <div class="header-right">
            <!-- notification start -->
            <div class="notification-box ml-15 d-none d-md-flex">
              <button
                class="dropdown-toggle"
                type="button"
                id="notification"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="lni lni-alarm"></i>
                <span>0</span>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="notification"
              >
                <li>
                  <a>
                    <div class="image">
                      <img
                        src="https://img.icons8.com/ios-glyphs/60/null/administrator-male.png"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!-- notification end -->
            <!-- message start -->
            <div class="header-message-box ml-15 d-none d-md-flex">
              <button
                class="dropdown-toggle"
                type="button"
                id="message"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="lni lni-envelope"></i>
                <span>0</span>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="message"
              ></ul>
            </div>
            <!-- message end -->
            <!-- filter start -->
            <div class="filter-box ml-15 d-none d-md-flex">
              <button class="" type="button" id="filter">
                <i class="lni lni-funnel"></i>
              </button>
            </div>
            <!-- filter end -->
            <!-- profile start -->
            <div class="profile-box ml-15">
              <button
                class="dropdown-toggle bg-transparent border-0"
                type="button"
                id="profile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="profile-info">
                  <div class="info">
                    <h6>Admin</h6>
                    <div class="image">
                      <img
                        src="https://img.icons8.com/ios-glyphs/60/null/administrator-male.png"
                      />
                      <span class="status"></span>
                    </div>
                  </div>
                </div>
                <i class="lni lni-chevron-down"></i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="profile"
              >
                <li>
                  <a href="#0"> <i class="lni lni-user"></i> View Profile </a>
                </li>
                <li>
                  <a href="#0"> <i class="lni lni-alarm"></i> Notifications </a>
                </li>
                <li>
                  <a href="#0"> <i class="lni lni-inbox"></i> Messages </a>
                </li>
                <li>
                  <a href="#0"> <i class="lni lni-cog"></i> Settings </a>
                </li>
                <li>
                  <a href="#0"> <i class="lni lni-exit"></i> Sign Out </a>
                </li>
              </ul>
            </div>
            <!-- profile end -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
</style>
