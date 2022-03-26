import { axios, BASE_URL } from "./config";
import FAKE_API from "./__fake.api";

function getItemSubtypes(locationId, itemTypeId, startTime, endTime) {
  if (FAKE_API.USE_FAKE) return FAKE_API.getItemSubtypes();

  return axios.get(
    BASE_URL +
      "/item_subtype/available?location_id=" +
      locationId +
      "&item_type_id=" +
      itemTypeId +
      "&start_time=" +
      startTime +
      "&end_time=" +
      endTime
  );
}

const itemSubtypeApi = {
  getItemSubtypes
};

export default itemSubtypeApi;
