<template>
  <a-layout class="main-layout">
    <a-layout-header class="layout-header">
      <div class="logo-wrapper" @click="navigateToHome">
        <img class="logo-img" src="../assets/logo.png" alt="Logo" />
        <!-- <span class="logo-text">
          <h1>Renso</h1>
        </span> -->
      </div>
      <ul class="actions">
        <li class="action">
          <language-switch></language-switch>
        </li>
        <li class="action">
          <a-badge :dot="hasBag">
            <a-button
              type="primary"
              shape="circle"
              icon="shopping-cart"
              @click="openCart"
            />
          </a-badge>
        </li>
      </ul>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <router-view />
    </a-layout-content>
    <app-footer-layout />
  </a-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LanguageSwitch from "../components/LanguageSwitch.vue";
import { EXISTING_CART_ID_KEY, getIt } from "../utils/localStorage.util";
import AppFooterLayout from "./AppFooterLayout.vue";

export default {
  name: "MainLayout",

  components: {
    AppFooterLayout,
    LanguageSwitch
  },

  created() {
    const cartId = getIt(EXISTING_CART_ID_KEY);
    if (cartId) {
      this.setHasBag(true);
    }
  },

  computed: {
    ...mapState("bookingModule", ["hasBag"])
  },

  methods: {
    ...mapActions("bookingModule", {
      setHasBag: "setHasBag"
    }),

    navigateToHome() {
      this.$router.push("/home");
    },

    openCart() {
      if (this.$route.name !== "Cart") this.$router.push("/cart");
    }
  }
};
</script>

<style scoped>
.main-layout {
  position: relative;
  min-height: 100vh;
  background: #fafafa;
}

.layout-header {
  background: #fff;
  border-bottom: 1px solid lightgrey;
  padding: 2px 40px;
  width: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.logo-wrapper {
  position: relative;
  height: 100%;
  width: auto;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  cursor: pointer;
}

.logo-img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.logo-text h1 {
  text-align: left;
  width: 100px;
  line-height: 1;
  display: inline-block;
  color: #009ce6;
  font-size: 25px;
  margin: 0px;
  padding: 0px;
}

.main-layout .layout-content {
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  margin-top: 64px;
}

@media only screen and (max-width: 500px) {
  .layout-header {
    padding: 2px 20px;
  }

  .main-layout .layout-content {
    padding: 0 20px;
  }
}

.actions {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.action {
  margin-left: 15px;
}
</style>
