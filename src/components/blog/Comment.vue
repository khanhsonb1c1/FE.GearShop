<template>
  <div class="">
    <div class="box_comment">
      <img
        src="https://img.icons8.com/ios-filled/50/null/gender-neutral-user.png"
      />
      <div class="box_content">
        <span>{{ comment?.user.full_name }}</span>
        <p>{{ comment?.content }}</p>
      </div>
    </div>
    <div class="box_comment" v-if="isRepComment">
      <img src="https://img.icons8.com/ios/50/null/user--v1.png" />

      <div class="box_content">
        <div class="input_cmt">
          <input
            :type="text"
            placeholder="Trả lời cho bình luận của "
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
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../mixins/mixin";
import { rep_comment } from "../../service/blog";
import { authStore } from "../../store/auth";
import { blogStore } from "../../store/blog";

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
    };
  },

  computed: {
    get_id_comment() {
      return this.comment?._id;
    },

    get_user_id() {
      return authStore().user._id;
    },
  },

  methods: {
    createRepComment() {
      blogStore().createRepComment(
        this.get_id_comment,
        this.get_user_id,
        this.repComment
      ).then(res => {
        
      });
    },
  },

  components: {},
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
  