import { axios, BASE_URL } from "./config";

function getActivePaymentMethods() {
  return axios.get(BASE_URL + "/payment_method?status:eq=true");
}

const paymentMethodApi = {
  getActivePaymentMethods
};

export default paymentMethodApi;
