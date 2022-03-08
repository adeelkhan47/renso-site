import axios from "axios";

const BASE_URL = "";
const PAGE_SIZE = 10;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

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
