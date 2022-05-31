import { locationApi } from "../../apis";

const locationModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      locations: [],
      selectedLocation: null
    };
  },

  getters: {
    locations(state) {
      return state.locations.slice(0);
    }
  },

  actions: {
    init(ctx) {
      ctx.commit("LOADING", true);
      locationApi
        .getLocations()
        .then((res) => {
          if (res && res.data) {
            ctx.commit("LOCATIONS", res.data.objects);
          } else ctx.commit("LOCATIONS", []);
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOCATIONS", []);
          ctx.commit("LOADING", false);
        });
    },

    setSelectedLocation(ctx, locationId) {
      ctx.commit("SELECTED_LOCATION", locationId);
    }
  },

  mutations: {
    LOADING(state, val) {
      state.loading = val;
    },

    LOCATIONS(state, val) {
      state.locations = val;
    },

    SELECTED_LOCATION(state, val) {
      state.selectedLocation = val;
    }
  }
};

export default locationModule;
