<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  created() {
    this.initializeItemTypesModule();
    this.initializeLocations();
  },

  methods: {
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
