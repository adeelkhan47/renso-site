import { axios, BASE_URL } from "./config";
import FAKE_API from "./__fake.api";

function getBookingDetails(cartId, voucher = "", transactionId = "") {
  if (FAKE_API.USE_FAKE) return FAKE_API.getPageBooking();

  let url = BASE_URL + "/booking/bulk?cart_id=" + cartId;
  if (transactionId) {
    url += "&backup_unique_key=" + transactionId;
    // transactionId contains the information about voucher (no need to forward it)
  } else if (voucher) {
    url += "&voucher=" + voucher;
  }
  return axios.get(url);
}

function createBulkBookings(body) {
  return axios.post(BASE_URL + "/booking/bulk", body);
}

function deleteBooking(id) {
  return axios.delete(BASE_URL + "/booking/" + id);
}

const bookingApi = {
  getBookingDetails,
  createBulkBookings,
  deleteBooking
};

export default bookingApi;
