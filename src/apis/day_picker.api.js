import { axios, BASE_URL } from "./config";
function getDayPickerByItemTypeId(itemTypeId) {
  return axios.get(BASE_URL + "/day_picker?item_type_id:eq=" + itemTypeId);
}

const dayPickerApi = {
  getDayPickerByItemTypeId
};

export default dayPickerApi;
