<template>
  <div class="col-lg-8">
    <div class="card-style mb-30">
      <div
        class="title d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="left">
          <h6 class="text-medium mb-30">Danh mục</h6>
        </div>
      </div>
      <!-- End Title -->
      <div class="table-responsive">
        <table class="table top-selling-table">
          <thead>
            <tr>
              <th>
                <h6 class="text-sm text-medium">Tên Nhà cung cấp</h6>
              </th>

              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Mã nhà cung cấp <i class="lni lni-arrows-vertical"></i>
                </h6>
              </th>
              <th class="min-width">
                <h6 class="text-sm text-medium">
                  Số lượng sản phẩm <i class="lni lni-arrows-vertical"></i>
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
            <tr v-for="(item, index) in company_list" :key="index">
              <CompanyTableItem :item="item" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { companyStore } from "../../../store/company";
import CompanyTableItem from "./CompanyTableItem.vue";

export default defineComponent({
  data() {
    return {};
  },

  created() {
    this.getcompany();
  },

  computed: {
    company_list() {
      return companyStore().company_list;
    },
  },

  methods: {
    getcompany() {
      companyStore().getcompanyList();
    },
  },
  components: { CompanyTableItem },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
