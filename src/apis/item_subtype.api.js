import { axios, BASE_URL } from "./config";
import FAKE_API from "./__fake.api";

function getSubtypesByItemTypeId(itemTypeId) {
  if (FAKE_API.USE_FAKE) return FAKE_API.getItemSubtypes();

  return axios.get(BASE_URL + "/item_subtype/by_item_id/" + itemTypeId);
}

const itemSubtypeApi = {
  getSubtypesByItemTypeId
};

export default itemSubtypeApi;
