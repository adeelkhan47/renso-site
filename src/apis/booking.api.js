import { axios, BASE_URL, PAGE_SIZE } from "./config";
import FAKE_API from "./__fake.api";

function getBookings(page = 1) {
  if (FAKE_API.USE_FAKE) return FAKE_API.getPageBooking();

  return axios.get(BASE_URL + "/booking?start=" + page + "&limit=" + PAGE_SIZE);
}

function getPageBookingByItemId(itemId, startTime = null, endTime = null) {
  if (FAKE_API.USE_FAKE) return FAKE_API.getPageBooking();

  let url = BASE_URL + "/booking?item_id:eq=" + itemId;
  if (startTime) url += "&start_time:gte=" + startTime;
  if (endTime) url += "&end_time:lte=" + endTime;

  return axios.get(url);
}

const bookingApi = {
  getBookings,
  getPageBookingByItemId
};

export default bookingApi;
