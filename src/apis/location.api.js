import { axios, BASE_URL } from "./config";
import FAKE_API from "./__fake.api";

function getLocations() {
  if (FAKE_API.USE_FAKE) return FAKE_API.getLocationList();

  return axios.get(BASE_URL + "/location");
}

const locationApi = {
  getLocations
};

export default locationApi;
