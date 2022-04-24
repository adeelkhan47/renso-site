import axios from "axios";


const BASE_URL = "https://backend.renso.de/api/v1";
const PAGE_SIZE = 10;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common.Authorization =
  "331c244176cb02a86dbe044993189e95";

function configureApis(Vue) {
  Vue.prototype.$extractErrorMsg = function (
    apiError,
    defaultMsg = "Something went wrong"
  ) {
    return apiError &&
      apiError.response &&
      apiError.response.data &&
      apiError.response.data.error &&
      apiError.response.data.error.msg
      ? apiError.response.data.error.msg
      : defaultMsg;
  };
}

export { axios, BASE_URL, PAGE_SIZE, configureApis };
