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
export default {
  name: "PaymentFailure",
  data() {
    return {};
  },

  methods: {
    openHome() {
      this.$router.push("/home");
    }
  }
};
</script>
