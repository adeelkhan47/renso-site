import Vue from "vue";
import { timePickerApi } from "../../apis";

const timePickerModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      timePickers: []
    };
  },

  getters: {},

  actions: {
    init(ctx) {
      ctx.commit("LOADING", true);
      timePickerApi
        .getTimePickers()
        .then((res) => {
          if (res && res.data) {
            ctx.commit("TIME_PICKERS", res.data.objects);
          } else ctx.commit("TIME_PICKERS", []);
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("TIME_PICKERS", []);
          ctx.commit("LOADING", false);
          Vue.prototype.$message.error(
            Vue.prototype.$extractErrorMsg(
              err,
              Vue.prototype.$$t("somethingWentWrong")
            )
          );
        });
    }
  },

  mutations: {
    LOADING(state, val) {
      state.loading = val;
    },

    TIME_PICKERS(state, val) {
      state.timePickers = val;
    }
  }
};

export default timePickerModule;
