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
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
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
