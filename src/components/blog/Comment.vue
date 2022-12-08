<template>
  <div class="">
    <div class="box_comment">
      <img
        src="https://img.icons8.com/ios-filled/50/null/gender-neutral-user.png"
      />
      <div class="box_content">
        <span>{{ comment?.user.full_name }}</span>
        <p>{{ comment?.content }}</p>
        <a @click="isRepComment = !isRepComment">Trả lời</a>
        <a
          v-if="checkAuthCmt"
          style="margin-left: 20px"
          @click="deleteCmt(comment?._id)"
          >Xóa bình luận</a
        >
      </div>
    </div>
    <div style="padding-left: 50px" v-if="isRepComment">
      <div class="box_comment">
        <img src="https://img.icons8.com/ios/50/null/user--v1.png" />

        <div class="box_content">
          <span>Tôi</span>
          <div class="input_cmt">
            <input
              :type="text"
              :placeholder="get_placeholder"
              v-model="repComment"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
              @click="createRepComment()"
            >
              <path
                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div v-for="(repcomment, index) in comment?.rep_comment" :key="index">
        <rep-comment :rep_comment="repcomment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
import { comment } from "../../service/blog";
import { authStore } from "../../store/auth";
import { blogStore } from "../../store/blog";
import RepComment from "./RepComment.vue";

export default defineComponent({
  mixins: [formatValueMixin],
  props: {
    comment: {
      type: Object,
    },
  },

  data() {
    return {
      isRepComment: false as boolean,
      repComment: "" as string,

      // get_placeholder: "sdhfksdhfks",
    };
  },

  computed: {
    get_id_comment() {
      return this.comment?._id;
    },

    get_user_id() {
      return authStore().user._id;
    },

    get_user_cmt() {
      return this.comment?.user._id;
    },

    get_id_blog() {
      return blogStore().blog_detail._id;
    },

    get_placeholder() {
      const name = this.comment?.user.full_name;
      return "Trả lời bình luận của " + name;
    },
    checkAuthCmt() {
      if (this.get_user_cmt == this.get_user_id) {
        return true;
      } else return false;
    },
  },

  methods: {
    createRepComment() {
      blogStore()
        .createRepComment(
          this.get_id_comment,
          this.get_user_id,
          this.repComment
        )
        .then((res) => {
          this.repComment = "";
          blogStore().getBlogDetail(this.get_id_blog);
        });
    },

    deleteCmt(id: string) {
      comment.delete(this.get_id_comment).then(() => {
        blogStore().getBlogDetail(this.get_id_blog);
      });
    },
  },

  components: { RepComment },
});
</script>

<style scoped>
p {
  color: #282a3a;
  font-size: 16px;
  /* width: 80%; */
}

.box_comment {
  padding: 0px 20px;
  margin: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
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

a:hover {
  color: #332fd0 !important;
  text-decoration-line: underline !important;
  transition: 0s;
}
</style>
