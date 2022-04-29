import axios from "axios";

const BASE_URL = "https://backend.renso.de/api/v1";
// const BASE_URL = "https://00c4-180-178-189-110.ngrok.io/api/v1";
const PAGE_SIZE = 10;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common.Authorization =
  "3b81719d3a3f12b4f342ae06f1115b86";

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
