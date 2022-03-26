const storageKey = "renso_app_data";
const EXISTING_CART_ID_KEY = "existingCartId";
const APPLIED_VOUCHER_KEY = "appliedVoucher";
const STRIPE_PUBLIC_KEY =
  "pk_test_51KK1AdInECVV2DaUUVrSfXyAr5Ee0RUQdNDCH1KeO6BjvXmhLVDx7sDROv0Vb49yFMC2q0q9CVYixtLcgmfWUTPp000jv4ibaT";

function getStoredData() {
  let data = localStorage.getItem(storageKey);
  if (data) {
    data = JSON.parse(data);
  } else {
    data = {};
  }

  return data;
}

function saveIt(key, value) {
  const data = getStoredData();

  data[key] = value;
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function getIt(key) {
  const data = getStoredData();

  if (Object.hasOwnProperty.call(data, key)) {
    return data[key];
  } else return null;
}

function removeIt(key) {
  const data = getStoredData();

  delete data[key];
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export {
  getStoredData,
  saveIt,
  getIt,
  removeIt,
  EXISTING_CART_ID_KEY,
  APPLIED_VOUCHER_KEY,
  STRIPE_PUBLIC_KEY
};
