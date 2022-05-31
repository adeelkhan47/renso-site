import { bookingApi } from "../../apis";
import {
  getIt,
  saveIt,
  EXISTING_CART_ID_KEY,
  APPLIED_VOUCHER_KEY,
  TRANSACTION_ID_KEY
} from "../../utils/localStorage.util";

const bookingModule = {
  namespaced: true,

  state() {
    return {
      loading: false,
      bookings: [],
      subtotal: 0,
      totalPrice: 0,
      taxAmount: 0,
      finalPrice: 0,
      taxes: [],
      privacyPolicyLink: "",
      hasBag: false
    };
  },

  getters: {
    bookings(state) {
      return JSON.parse(JSON.stringify(state.bookings));
    }
  },

  actions: {
    getBookings(ctx, { cartId, voucher = "", transactionId = "", cb }) {
      ctx.commit("LOADING", true);
      bookingApi
        .getBookingDetails(cartId, voucher, transactionId)
        .then((res) => {
          if (res && res.data) {
            ctx.commit("BOOKINGS", res.data.objects.bookings);
            ctx.commit("TAXES", res.data.objects.taxs || []);
            ctx.commit("SUB_TOTAL", res.data.objects.actual_total_price);
            ctx.commit("TOTAL_PRICE", res.data.objects.effected_total_price);
            ctx.commit("TAX_AMOUNT", res.data.objects.tax_amount);
            ctx.commit(
              "PRIVACY_POLICY_LINK",
              res.data.objects.privacy_policy_link || ""
            );
            ctx.commit(
              "FINAL_PRICE",
              res.data.objects.actual_total_price_after_tax
            );
            ctx.commit(
              "HAS_BAG",
              !!(res.data.objects.bookings && res.data.objects.bookings.length)
            );

            if (cb && typeof cb === "function") {
              cb({
                success: true,
                data: res.data.objects.voucher
              });
            }
          } else {
            ctx.commit("BOOKINGS", []);
            ctx.commit("TAXES", []);
            ctx.commit("SUB_TOTAL", "0");
            ctx.commit("TOTAL_PRICE", "0");
            ctx.commit("TAX_AMOUNT", "0");
            ctx.commit("PRIVACY_POLICY_LINK", "");
            ctx.commit("FINAL_PRICE", "0");
            ctx.commit("HAS_BAG", false);
          }
          ctx.commit("LOADING", false);
        })
        .catch((err) => {
          console.error(err);

          ctx.commit("BOOKINGS", []);
          ctx.commit("TAXES", []);
          ctx.commit("SUB_TOTAL", "0");
          ctx.commit("TOTAL_PRICE", "0");
          ctx.commit("TAX_AMOUNT", "0");
          ctx.commit("PRIVACY_POLICY_LINK", "");
          ctx.commit("FINAL_PRICE", "0");
          ctx.commit("HAS_BAG", false);

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
        .then(() => {
          const cartId = getIt(EXISTING_CART_ID_KEY);
          const voucher = getIt(APPLIED_VOUCHER_KEY);
          const transactionId = getIt(TRANSACTION_ID_KEY + "_" + cartId);
          ctx.commit("LOADING", false);
          ctx.dispatch("getBookings", { cartId, voucher, transactionId });
        })
        .catch((err) => {
          console.error(err);
          ctx.commit("LOADING", false);
        });
    },

    setHasBag(ctx, val) {
      ctx.commit("HAS_BAG", val);
    },

    reset(ctx) {
      ctx.commit("RESET");
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

    TAX_AMOUNT(state, val) {
      state.taxAmount = val;
    },

    FINAL_PRICE(state, val) {
      state.finalPrice = val;
    },

    TAXES(state, val) {
      state.taxes = val;
    },

    PRIVACY_POLICY_LINK(state, val) {
      state.privacyPolicyLink = val;
    },

    HAS_BAG(state, val) {
      state.hasBag = val;
    },

    RESET(state) {
      state.bookings = [];
      state.subtotal = 0;
      state.totalPrice = 0;
      state.taxAmount = 0;
      state.finalPrice = 0;
      state.taxes = [];
      state.hasBag = false;
    }
  }
};

export default bookingModule;
