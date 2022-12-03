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
                    v-model="new_comment"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-send"
                    viewBox="0 0 16 16"
                    @click="createComment()"
                  >
                    <path
                      d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Comment
              v-for="(comment, index) in blog.comment"
              :key="index"
              :comment="comment"
            />

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
import { authStore } from "../../store/auth";
import { blogStore } from "../../store/blog";
import BlogListInDetail from "./BlogListInDetail.vue";
import Comment from "./Comment.vue";

export default defineComponent({
  mixins: [formatValueMixin],
  data() {
    return {
      new_comment: "" as string,
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    user_id() {
      return authStore().user._id;
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

    createComment() {
      blogStore()
        .createComment(this.id, this.user_id, this.new_comment)
        .then((res) => {
          this.getBlogDetail();
        })
        .catch((err) => {});
    },

    updateComment(id: string) {
      blogStore()
        .updateComment(id, this.new_comment)
        .then((res) => {})
        .catch((err) => {});
    },

    deleteComment(id: string) {
      blogStore()
        .deleteComment(id)
        .then((res) => {})
        .catch((err) => {});
    },
  },

  components: {
    BlogListInDetail,
    Comment,
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
  width: 70%;
  border-bottom: 1px solid #65647c;
}

svg {
  color: #009eff;
}
svg:hover {
  color: red;
}
</style>
