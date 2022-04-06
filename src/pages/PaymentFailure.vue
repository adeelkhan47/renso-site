<template>
  <a-result
    status="error"
    title="Payment Failed"
    sub-title="Unable to complete order payment."
  >
    <template #extra>
      <a-button type="primary" @click="openHome"> Go Home </a-button>
    </template>
  </a-result>
</template>
<script>
import { APPLIED_VOUCHER_KEY, removeIt } from "../utils/localStorage.util";
export default {
  name: "PaymentFailure",

  data() {
    return {};
  },

  mounted() {
    removeIt(APPLIED_VOUCHER_KEY);
  },

  methods: {
    openHome() {
      this.$router.push("/home");
    }
  }
};
</script>
