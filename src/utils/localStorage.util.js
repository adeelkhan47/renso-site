const storageKey = "renso_app_data";
const EXISTING_CART_ID_KEY = "existingCartId";
const APPLIED_VOUCHER_KEY = "appliedVoucher";
const TRANSACTION_ID_KEY = "existingTransactionId";
const STRIPE_PUBLIC_KEY = "pk_live_51KhBNIE2epVqKFExgm8VrKkUhIeShgrM1t6fAB4AYB7GPENwquBOFBz1rj4ZD0eaSstWQWXJNf1e1sfNG7dr4VfA00mjIONJg8";
// const STRIPE_PUBLIC_KEY = "pk_test_51KK1AdInECVV2DaUUVrSfXyAr5Ee0RUQdNDCH1KeO6BjvXmhLVDx7sDROv0Vb49yFMC2q0q9CVYixtLcgmfWUTPp000jv4ibaT";
const MATCH_REGEX = Object.freeze({
  STARTS_WITH: "startsWith"
});

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

function removeMatched(str, match) {
  if (match && Object.values(MATCH_REGEX).includes(match)) {
    const data = getStoredData();
    let deleteKeys = Object.keys(data);

    switch (match) {
      case MATCH_REGEX.STARTS_WITH:
        deleteKeys = deleteKeys.filter((key) => key.startsWith(str));
        break;

      default:
        deleteKeys = [];
        break;
    }

    deleteKeys.forEach((key) => {
      delete data[key];
    });

    localStorage.setItem(storageKey, JSON.stringify(data));
  }
}

export {
  getStoredData,
  saveIt,
  getIt,
  removeIt,
  removeMatched,
  EXISTING_CART_ID_KEY,
  APPLIED_VOUCHER_KEY,
  TRANSACTION_ID_KEY,
  STRIPE_PUBLIC_KEY,
  MATCH_REGEX
};
