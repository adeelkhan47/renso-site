import { bookingApi } from "../../apis";

const bookingModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      bookings: []
    };
  },

  getters: {
    bookings(state) {
      return state.bookings.slice(0);
    }
  },

  actions: {
    init(ctx) {
      ctx.commit("LOADING", true);
      bookingApi
        .getBookings()
        .then((res) => {
          if (res && res.data) {
            ctx.commit("BOOKINGS", res.data.objects);
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

    BOOKINGS(state, bookings) {
      state.bookings = bookings;
    }
  }
};

export default bookingModule;
