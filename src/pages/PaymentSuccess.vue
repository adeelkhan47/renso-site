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
  removeIt
} from "../utils/localStorage.util";
export default {
  name: "PaymentSuccess",

  data() {
    return {};
  },

  mounted() {
    removeIt(EXISTING_CART_ID_KEY);
    removeIt(APPLIED_VOUCHER_KEY);

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
