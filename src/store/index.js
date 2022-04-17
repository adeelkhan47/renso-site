import Vue from "vue";
import Vuex from "vuex";

import itemTypeModule from "./modules/itemTypeModule";
import itemSubtypeModule from "./modules/itemSubtypeModule";
import bookingModule from "./modules/bookingModule";
import locationModule from "./modules/locationModule";
import timePickerModule from "./modules/timePickerModule";
import appSettingModule from "./modules/appSettingModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    startTime: "",
    endTime: ""
  },
  actions: {
    setStartTime(ctx, time) {
      ctx.commit("START_TIME", time);
    },

    setEndTime(ctx, time) {
      ctx.commit("END_TIME", time);
    }
  },
  mutations: {
    START_TIME(state, val) {
      state.startTime = val;
    },
    END_TIME(state, val) {
      state.endTime = val;
    }
  },
  modules: {
    itemTypeModule,
    itemSubtypeModule,
    bookingModule,
    locationModule,
    timePickerModule,
    appSettingModule
  }
});
