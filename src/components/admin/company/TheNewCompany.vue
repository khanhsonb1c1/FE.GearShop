<template>
  <div class="col-lg-4">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6 class="mb-25">tạo mới</h6>
      <InputText
        title="Tên nhà cung cấp"
        placeholder="..."
        :value="company.name"
        @update:value="company.name = $event"
      />

      <InputText
        title="Mã nhà cung cấp"
        placeholder="..."
        :value="company.code"
        @update:value="company.code = $event"
      />

      <ButtonField title="Tạo mới" @handleClick="createcompany" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputText from "../../input/InputText.vue";
import ButtonField from "../../button/Button.vue";
import { company } from "../../../service/company";
import { companyStore } from "../../../store/company";

export default defineComponent({
  data() {
    return {
      company: {
        name: "" as string,
        code: "" as string,
      } as any,
    };
  },
  methods: {
    createcompany() {
      company
        .create({
          name: this.company.name,
          company_id: this.company.code,
        })
        .then((res) => {
          companyStore().getcompanyList();
        });
    },
  },

  components: { InputText, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
