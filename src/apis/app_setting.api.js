import { axios, BASE_URL } from "./config";

function getAppSettings() {
  return axios.get(BASE_URL + "/front_end_configs");
}

const appSettingApi = {
  getAppSettings
};

export default appSettingApi;
