<template>
  <tr>
    <td>
      <p class="text-sm">{{ item?._id }}</p>
    </td>
    <td>
      <p class="text-sm">{{ item?.full_name }}</p>
    </td>
    <td>
      <p
        :class="[
          item?.role == 'admin' ? 'success-btn' : 'warning-btn',
          'status-btn ',
        ]"
      >
        {{ item?.role }}
      </p>
    </td>
    <td>
      <p class="text-sm">{{ item?.address_detail }}</p>
    </td>
    <td>
      <p class="text-sm">{{ item?.phone }}</p>
    </td>

    <!-- <td>
      <p class="text-sm">{{ item?.cart.length }}</p>
    </td> -->

    <td>
      <div class="action justify-content-end">
        <!-- <button class="edit">
          <i class="lni lni-pencil"></i>
        </button> -->
        <button
          class="more-btn ml-10 dropdown-toggle"
          id="moreAction1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="lni lni-more-alt"></i>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="moreAction1"
        >
          <li class="dropdown-item">
            <a class="text-gray">Chi tiết</a>
          </li>
          <li class="dropdown-item">
            <a class="text-gray" @click="deleteUser(item?._id)">Xóa</a>
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMixin } from "../../../mixins/mixin";
import { authStore } from "../../../store/auth";
export default defineComponent({
  mixins: [formatValueMixin],
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    deleteUser(id: string) {
      authStore().deleteUser(id);
    },
  },
});
</script>

<style scoped>
@import url("../../../assets/assets/css/main.css");
</style>
