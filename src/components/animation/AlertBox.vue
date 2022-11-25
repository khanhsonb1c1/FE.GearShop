<template>
  <div
    :class="[
      sstyle == 'success'
        ? 'success-alert'
        : sstyle == 'error'
        ? 'danger-alert'
        : sstyle,
      'alert-box pl-100 alert_custom',
    ]"
  >
    <!-- <div class="left">
      <h5 class="text-bold">Success</h5>
    </div> -->
    <div class="alert">
      <h4 class="alert-heading">{{title}}</h4>
      <p class="text-medium">
        {{content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    sstyle: {
      type: String,
    },
    content: {
      type: String,
    }
  },
};
</script>

<style scoped>
@import url("../../assets/assets/css/main.css");
.alert_custom {
  position: fixed !important;
  bottom: 100px;
  right: 50px;
  
}
</style>