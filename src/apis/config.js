import axios from "axios";

const BASE_URL = "https://backend.renso.de/api/v1";
// const BASE_URL = "https://fed3-180-178-189-110.ngrok.io/api/v1";
const PAGE_SIZE = 10;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common.Authorization =
  "c45af3ea8ad38c4f8cbc900133cb432c";

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
