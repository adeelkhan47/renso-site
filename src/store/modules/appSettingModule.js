import { appSettingApi } from "../../apis";

const appSettingModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      settings: {}
    };
  },

  getters: {
    logoUrl(state) {
      if (state.settings && state.settings.logo) {
        return state.settings.logo;
      } else return "";
    }
  },

  actions: {
    init(ctx) {
      ctx.commit("LOADING", true);
      appSettingApi
        .getAppSettings()
        .then((res) => {
          if (res && res.data) {
            ctx.commit("SETTINGS", res.data.objects);
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

    SETTINGS(state, val) {
      state.settings = val;
    }
  }
};

export default appSettingModule;
