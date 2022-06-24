<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import enUS from "ant-design-vue/es/locale/en_US";
import deDE from "ant-design-vue/es/locale/de_DE";
import { mapActions } from "vuex";
import {
  getIt,
  MATCH_REGEX,
  removeIt,
  removeMatched,
  saveIt,
  TRANSACTION_ID_KEY
} from "./utils/localStorage.util";
import Vue from "vue";

const STATE_KEY = "PREVIOUS_STATE";

export default {
  name: "App",

  computed: {
    locale() {
      let temp = "";
      switch (this.$i18n.locale) {
        case "de":
          temp = deDE;
          break;

        default:
          temp = enUS;
          break;
      }
      return temp;
    }
  },

  created() {
    // supports localization in vuex modules
    Vue.prototype.$$t = (key) => this.$t(key);

    this.initializeAppSettings();
    this.initializeItemTypesModule();
    this.initializeLocations();

    const self = this;
    const prevState = getIt(STATE_KEY);
    if (prevState) {
      this.$store.replaceState(JSON.parse(prevState));
      removeIt(STATE_KEY);
    }

    window.onbeforeunload = function () {
      saveIt(STATE_KEY, JSON.stringify(self.$store.state));
      removeMatched(TRANSACTION_ID_KEY, MATCH_REGEX.STARTS_WITH);
    };
  },

  methods: {
    ...mapActions("appSettingModule", {
      initializeAppSettings: "init"
    }),

    ...mapActions("itemTypeModule", {
      initializeItemTypesModule: "init"
    }),

    ...mapActions("locationModule", {
      initializeLocations: "init"
    })
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.no-item-types {
  margin-bottom: 50px;
}

.full-page-cover {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: rgba(211, 211, 211, 0.8);
  overflow: hidden;
}
</style>
