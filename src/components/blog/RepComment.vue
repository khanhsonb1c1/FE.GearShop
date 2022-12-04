<template>
  <div class="box_comment">
    <img
      src="https://img.icons8.com/ios-filled/50/null/gender-neutral-user.png"
    />
    <div class="box_content">
      <span>{{ rep_comment?.user.full_name }}</span>
      <p>{{ rep_comment?.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    rep_comment: {
      type: Object,
    },
  },
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
</style>
