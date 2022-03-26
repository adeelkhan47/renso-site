import { axios, BASE_URL } from "./config";

function getOrderExtraFields() {
  return axios.get(BASE_URL + "/custom_parameter");
}

function createOrder(body) {
  return axios.post(BASE_URL + "/order", body);
}

const orderApi = {
  getOrderExtraFields,
  createOrder
};

export default orderApi;
