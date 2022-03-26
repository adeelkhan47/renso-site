<template>
  <a-result
    status="success"
    title="Order placed!"
    sub-title="Successfully completed order."
  >
    <template #extra>
      <a-button type="primary" @click="openHome"> Go Home </a-button>
    </template>
  </a-result>
</template>
<script>
import { EXISTING_CART_ID_KEY, removeIt } from "../utils/localStorage.util";
export default {
  name: "PaymentSuccess",

  data() {
    return {};
  },

  mounted() {
    removeIt(EXISTING_CART_ID_KEY);
  },

  methods: {
    openHome() {
      this.$router.push("/home");
    }
  }
};
</script>
