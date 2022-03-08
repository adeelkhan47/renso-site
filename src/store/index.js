import Vue from "vue";
import Vuex from "vuex";

import itemTypeModule from "./modules/itemTypeModule";
import itemSubtypeModule from "./modules/itemSubtypeModule";
import bookingModule from "./modules/bookingModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    itemTypeModule,
    itemSubtypeModule,
    bookingModule
  }
});
