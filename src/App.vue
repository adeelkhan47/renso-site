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
* {
  box-sizing: border-box;
}

.no-item-types {
  margin-bottom: 50px;
}
</style>
