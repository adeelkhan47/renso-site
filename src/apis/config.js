import axios from "axios";

// const BASE_URL = "http://ec2-44-201-188-15.compute-1.amazonaws.com/api/v1";
// const BASE_URL = "https://fed3-180-178-189-110.ngrok.io/api/v1";
const BASE_URL = "http://backend.renso.de/api/v1";
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
