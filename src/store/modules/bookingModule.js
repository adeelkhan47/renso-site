import { bookingApi } from "../../apis";
import {
  getIt,
  saveIt,
  EXISTING_CART_ID_KEY,
  APPLIED_VOUCHER_KEY
} from "../../utils/localStorage.util";

const bookingModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      bookings: [],
      subtotal: 0,
      totalPrice: 0,
      finalPrice: 0,
      taxes: []
    };
  },

  getters: {
    bookings(state) {
      return JSON.parse(JSON.stringify(state.bookings));
    }
  },

  actions: {
    getBookings(ctx, { cartId, voucher }) {
      ctx.commit("LOADING", true);
      bookingApi
        .getBookings(cartId, voucher)
        .then((res) => {
          if (res && res.data) {
            ctx.commit("BOOKINGS", res.data.objects.bookings);
            ctx.commit("TAXES", res.data.objects.taxs || []);
            ctx.commit("SUB_TOTAL", res.data.objects.actual_total_price);
            ctx.commit("TOTAL_PRICE", res.data.objects.effected_total_price);
            ctx.commit(
              "FINAL_PRICE",
              res.data.objects.actual_total_price_after_tax
            );
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
        });
    },

    createBookings(
      ctx,
      { startTime, endTime, bookingDetails, locationId, cb }
    ) {
      ctx.commit("LOADING", true);
      const body = {
        start_time: startTime,
        end_time: endTime,
        bookings_details: bookingDetails,
        location_id: locationId
      };

      const existingCartId = getIt(EXISTING_CART_ID_KEY);
      if (existingCartId !== null) {
        body.cart_id = Number.parseInt(existingCartId);
      }

      bookingApi
        .createBulkBookings(body)
        .then((res) => {
          if (res && res.data && res.data.objects) {
            saveIt(EXISTING_CART_ID_KEY, res.data.objects.cart_id);
            ctx.commit("itemSubtypeModule/RESET_SELECTION", null, {
              root: true
            });
            if (cb && typeof cb === "function") {
              cb({
                success: true
              });
            }
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
          if (cb && typeof cb === "function") {
            cb({
              success: false,
              error: err
            });
          }
        });
    },

    deleteBooking(ctx, id) {
      ctx.commit("LOADING", true);
      bookingApi
        .deleteBooking(id)
        .then((res) => {
          const cartId = getIt(EXISTING_CART_ID_KEY);
          const voucher = getIt(APPLIED_VOUCHER_KEY);
          ctx.commit("LOADING", false);
          ctx.dispatch("getBookings", { cartId, voucher });
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
    },

    SUB_TOTAL(state, val) {
      state.subtotal = val;
    },

    TOTAL_PRICE(state, val) {
      state.totalPrice = val;
    },

    FINAL_PRICE(state, val) {
      state.finalPrice = val;
    },

    TAXES(state, val) {
      state.taxes = val;
    }
  }
};

export default bookingModule;
