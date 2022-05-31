<template>
  <bookings-page v-if="cartId && transactionId"> </bookings-page>
</template>

<script>
import {
  EXISTING_CART_ID_KEY,
  TRANSACTION_ID_KEY,
  saveIt
} from "../utils/localStorage.util";
import BookingsPage from "./BookingsPage.vue";

export default {
  name: "CartEditPage",

  components: {
    BookingsPage
  },

  props: {},

  data() {
    return {
      cartId: "",
      transactionId: ""
    };
  },

  created() {
    let cartId = "";
    let transactionId = "";
    if (
      this.$route.params &&
      typeof this.$route.params === "object" &&
      this.$route.params.cartId &&
      this.$route.params.transactionId
    ) {
      cartId = this.$route.params.cartId;
      transactionId = this.$route.params.transactionId;

      saveIt(EXISTING_CART_ID_KEY, cartId);
      saveIt(TRANSACTION_ID_KEY + "_" + cartId, transactionId);
    }

    this.cartId = cartId;
    this.transactionId = transactionId;
  }
};
</script>

<style scoped></style>
