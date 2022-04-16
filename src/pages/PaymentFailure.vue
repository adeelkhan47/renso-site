<template>
  <a-result
    status="error"
    :title="$t('paymentFailed')"
    :sub-title="$t('unableToCompleteOrderPayment')"
  >
    <template #extra>
      <a-button type="primary" @click="openHome"> {{ $t("goHome") }} </a-button>
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
