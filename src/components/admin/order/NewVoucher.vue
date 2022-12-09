<template>
  <div class="col-lg-4">
    <!-- input style start -->
    <div class="card-style mb-30">
      <h6 class="mb-25">tạo mới</h6>
      <InputText
        title="Mã giảm giá"
        placeholder="..."
        :value="voucher.code"
        @update:value="voucher.code = $event"
      />

      <InputText
        title="Giá trị"
        placeholder="..."
        type="number"
        :value="voucher.value"
        @update:value="voucher.value = $event"
      />

      <ButtonField title="Tạo mới" @handleClick="createcompany" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputText from "../../input/InputText.vue";
import ButtonField from "../../button/Button.vue";
import { voucher } from "../../../service/order";
import { orderStore } from "../../../store/order";

export default defineComponent({
  data() {
    return {
      voucher: {
        value: 0 as number,
        code: "" as string,
      } as any,
    };
  },
  methods: {
    createcompany() {
      voucher
        .create({
          code: this.voucher.code,
          value: this.voucher.value,
        })
        .then((res) => {
          orderStore().getVoucherList();
        });
    },
  },

  components: { InputText, ButtonField },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
