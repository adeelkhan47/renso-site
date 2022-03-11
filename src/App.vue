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
    this.initializeBookings();
  },

  methods: {
    ...mapActions("itemTypeModule", {
      initializeItemTypesModule: "init"
    }),

    ...mapActions("bookingModule", {
      initializeBookings: "init" // DELETE ME
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
</style>
