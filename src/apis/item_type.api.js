import { axios, BASE_URL } from "./config";
import FAKE_API from "./__fake.api";

function getItemTypes() {
  if (FAKE_API.USE_FAKE) return FAKE_API.getItemTypes();

  return axios.get(BASE_URL + "/item_type/for_current_season");
}

function getAllItemTypes() {
  if (FAKE_API.USE_FAKE) return FAKE_API.getItemTypes();

  return axios.get(BASE_URL + "/item_type");
}

const itemTypeApi = {
  getItemTypes,
  getAllItemTypes
};

export default itemTypeApi;
