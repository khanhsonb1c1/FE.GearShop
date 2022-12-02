<template>
  <section class="trending-product section" style="margin-top: 12px">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-6 col-12">
          <!-- Start Single Product -->
          <div class="single-product">
            <div class="product-image">
              <img :src="getUrl" />
            </div>
            <div class="product-info">
              <span class="category" style="padding-bottom: 10px">{{
                formatTime(blog.created_at)
              }}</span>
              <h4 class="title" style="line-height: 1.5">
                {{ blog.title }}
              </h4>

              <div class="price blog_text" style="padding-bottom: 20px">
                <p>
                  {{ blog.description }}
                </p>
              </div>

              <h5 class="title" style="line-height: 1.5">
                {{ blog.title1 }}
              </h5>

              <div class="price blog_text" style="padding-bottom: 20px">
                <p>
                  {{ blog.content1 }}
                </p>
              </div>

              <h5 class="title" style="line-height: 1.5">
                {{ blog.title2 }}
              </h5>

              <div class="price blog_text" style="padding-bottom: 20px">
                <p>
                  {{ blog.content2 }}
                </p>
              </div>
            </div>
          </div>

          <div class="single-product">
            <h5 class="title" style="line-height: 1.5; padding-left: 20px">
              Bình luận
            </h5>

            <div class="box_comment">
              <img src="https://img.icons8.com/ios/50/null/user--v1.png" />

              <div class="box_content">
                <div class="input_cmt">
                  <input
                    :type="text"
                    placeholder="bình luận..."
                    v-model="model"
                  />
                </div>
              </div>
            </div>

            <div
              class="box_comment"
              v-for="(comment, index) in blog.comment"
              :key="index"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/null/gender-neutral-user.png"
              />

              <div class="box_content">
                <span>{{ comment.user.full_name }}</span>
                <p>{{ comment.content }}</p>
              </div>
            </div>
          </div>
        </div>

        <BlogListInDetail />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
import { blogStore } from "../../store/blog";
import BlogListInDetail from "./BlogListInDetail.vue";

export default defineComponent({
  mixins: [formatValueMixin],
  data() {
    return {};
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    blog() {
      return blogStore().blog_detail;
    },

    getUrl() {
      const link_full = this.blog.imageUrl;
      const link = link_full.replace(`public`, "");
      return import.meta.env.VITE_APP_GEARSHOP + link;
    },
  },

  watch: {
    id() {
      this.getBlogDetail();
    },
  },
  created() {
    this.getBlogDetail();
  },

  methods: {
    getBlogDetail() {
      blogStore().getBlogDetail(this.id);
    },
  },

  components: {
    BlogListInDetail,
  },
});
</script>

<style scoped>
p {
  color: #282a3a;
  font-size: 16px;
}

.box_comment {
  padding: 0px 20px;
  margin: 20px 0;
  display: flex;
}

.box_content {
  margin-left: 30px;
  width: 100%;
}

.input_cmt {
  width: 100%;
}
.input_cmt input {
  border: none;
  width: 100%;
}
</style>
