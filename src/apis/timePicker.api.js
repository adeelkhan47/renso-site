import { axios, BASE_URL } from "./config";

function getTimePickers() {
  return axios.get(BASE_URL + "/time_picker");
}

const timePickerApi = {
  getTimePickers
};

export default timePickerApi;
