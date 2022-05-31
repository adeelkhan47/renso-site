<template>
  <a-result
    status="success"
    :title="$t('orderPlaced')"
    :sub-title="$t('successfullyCompletedOrder')"
  >
    <template #extra>
      <a-button type="primary" @click="openHome"> {{ $t("goHome") }} </a-button>
    </template>
  </a-result>
</template>
<script>
import { mapActions } from "vuex";
import {
  APPLIED_VOUCHER_KEY,
  EXISTING_CART_ID_KEY,
  TRANSACTION_ID_KEY,
  MATCH_REGEX,
  removeIt,
  removeMatched
} from "../utils/localStorage.util";
export default {
  name: "PaymentSuccess",

  data() {
    return {};
  },

  mounted() {
    removeIt(EXISTING_CART_ID_KEY);
    removeIt(APPLIED_VOUCHER_KEY);
    removeMatched(TRANSACTION_ID_KEY, MATCH_REGEX.STARTS_WITH);

    this.reset();
  },

  methods: {
    ...mapActions("bookingModule", ["reset"]),

    openHome() {
      this.$router.push("/home");
    }
  }
};
</script>
