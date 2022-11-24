<template>
  <section class="tab-components">
    <div class="container-fluid">
      <div class="title-wrapper pt-30">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="title mb-30">
              <h2>Quản lý bài viết</h2>
            </div>
          </div>

          <div class="col-md-6">
            <div class="breadcrumb-wrapper mb-30">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a>Admin</a>
                  </li>

                  <li class="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="form-elements-wrapper">
        <div class="row">
            <TheNewBlog/>
          <!-- <TheTableBlog /> -->
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import TheTableBlog from "./blog/TheTableBlog.vue";
import TheNewBlog from "./blog/TheNewBlog.vue"
export default defineComponent({
  components: { TheTableBlog,TheNewBlog },
});
</script>
  
  <style scoped>
@import url("../../assets/assets/css/main.css");
</style>
  