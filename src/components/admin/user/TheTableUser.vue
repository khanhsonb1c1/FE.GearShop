<template>
    <div class="col-lg-12">
      <div class="card-style mb-30">
        <div
          class="title d-flex flex-wrap align-items-center justify-content-between"
        >
          <div class="left">
            <h6 class="text-medium mb-30">Danh sách người dùng</h6>
          </div>
        
        </div>
        <!-- End Title -->
        <div class="table-responsive">
          <table class="table top-selling-table">
            <thead>
              <tr>
                <th>
                  <h6 class="text-sm text-medium">ID</h6>
                </th>
                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    Tên 
                  </h6>
                </th>
                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    Vai trò <i class="lni lni-arrows-vertical"></i>
                  </h6>
                </th>
                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    Địa chỉ <i class="lni lni-arrows-vertical"></i>
                  </h6>
                </th>
                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    SĐT <i class="lni lni-arrows-vertical"></i>
                  </h6>
                </th>
               
                <th class="min-width">
                  <h6 class="text-sm text-medium">
                    Số lượng đơn hàng <i class="lni lni-arrows-vertical"></i>
                  </h6>
                </th>
  
                <th>
                  <h6 class="text-sm text-medium text-end">
                    Actions <i class="lni lni-arrows-vertical"></i>
                  </h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(item, index) in user_list" :key="index">
               
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        page: 1 as number,
      };
    },
  
    created() {
    },
  
    computed: {
      user_list() {
      },
    },
  
    methods: {
      getUser() {
        
      },
    },
    components: {  },
  });
  </script>
  
  <style scoped>
  @import url("../../../assets/assets/css/main.css");
  </style>
  