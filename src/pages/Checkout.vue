<template>
  <div class="checkout">
    <template>
      <div class="app-logo">
        <img class="logo-img" src="../assets/logo.png" alt="Logo" />
      </div>
      <div class="form">
        <a-form-model
          ref="ruleForm"
          :model="form"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item
            ref="client_name"
            :label="$t('name')"
            prop="client_name"
          >
            <a-input
              v-model="form.client_name"
              @blur="
                () => {
                  $refs.client_name ? $refs.client_name.onFieldBlur() : '';
                }
              "
            />
          </a-form-model-item>
          <a-form-model-item :label="$t('email')" prop="client_email">
            <a-input
              type="email"
              v-model="form.client_email"
              @blur="
                () => {
                  $refs.client_email ? $refs.client_email.onFieldBlur() : '';
                }
              "
            />
          </a-form-model-item>
          <a-form-model-item :label="$t('phoneNumber')" prop="phone_number">
            <a-input
              v-model="form.phone_number"
              @blur="
                () => {
                  $refs.phone_number ? $refs.phone_number.onFieldBlur() : '';
                }
              "
            />
          </a-form-model-item>
          <!-- <a-form-model-item label="Address" prop="address">
          <a-input v-model="form.address" type="textarea" />
        </a-form-model-item> -->
          <template v-if="extraFields && extraFields.length">
            <a-form-model-item
              v-for="fieldObj of extraFields"
              :key="fieldObj.id"
              :label="fieldObj.name"
              :prop="fieldObj.name"
            >
              <a-input
                v-model="form[fieldObj.name]"
                @blur="
                  () => {
                    $refs[fieldObj.name]
                      ? $refs[fieldObj.name].onFieldBlur()
                      : '';
                  }
                "
              />
            </a-form-model-item>
          </template>
          <a-form-model-item
            :label="$t('selectPaymentMethod')"
            v-if="paymentMethods && paymentMethods.length"
          >
            <a-radio-group size="large" v-model="selectedPaymentMethodId">
              <a-radio
                v-for="method in paymentMethods"
                :key="method.id"
                :value="method.id"
                class="radio-item"
              >
                {{ method.name + " (" + method.description + ")" }}
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item
            :wrapper-col="actionWrapCol"
            v-if="privacyPolicyLink"
          >
            <a-checkbox v-model="privacy">
              <a :href="privacyPolicyLink" target="blank">
                {{ $t("acceptPrivacyPolicy") }}
              </a>
            </a-checkbox>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="actionWrapCol" class="actions">
            <a-button icon="redo" class="action" @click="resetForm">
              {{ $t("reset") }}
            </a-button>
            <a-button
              type="primary"
              style="margin-left: 10px"
              icon="credit-card"
              class="action"
              :disabled="
                !isReady ||
                (!privacy && privacyPolicyLink) ||
                !paymentMethods ||
                paymentMethods.length === 0
              "
              @click="onSubmit"
            >
              {{ $t("book") }}
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </template>

    <template v-if="loading">
      <div class="full-page-cover">
        <a-spin size="large" />
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { orderApi, paymentMethodApi } from "../apis";
import {
  APPLIED_VOUCHER_KEY,
  EXISTING_CART_ID_KEY,
  getIt,
  STRIPE_PUBLIC_KEY
} from "../utils/localStorage.util";

export default {
  name: "Checkout",

  data() {
    return {
      privacy: false,
      loading: false,
      labelCol: { sm: {}, md: { span: 8 } },
      wrapperCol: { sm: {}, md: { span: 10 } },
      actionWrapCol: { sm: {}, md: { span: 9, offset: 9 } },
      other: "",
      form: {
        client_name: "",
        client_email: "",
        phone_number: ""
      },
      rules: {
        client_name: [
          {
            required: true,
            message: this.$t("nameIsRequired"),
            trigger: "blur"
          }
        ],
        client_email: [
          {
            type: "email",
            message: this.$t("invalidEmail")
          },
          {
            required: true,
            message: this.$t("emailIsRequired")
          }
        ],
        phone_number: [
          {
            required: true,
            message: this.$t("phoneNumberIsRequired"),
            trigger: "blur"
          }
        ]
      },
      extraFields: [],
      paymentMethods: [],
      selectedPaymentMethodId: null
    };
  },

  computed: {
    ...mapState("bookingModule", ["privacyPolicyLink"]),

    isReady() {
      return !!(
        this.form.client_name &&
        this.form.client_email &&
        this.form.phone_number
      );
    }
  },

  watch: {
    "$i18n.locale": function () {
      this.rules = {
        client_name: [
          {
            required: true,
            message: this.$t("nameIsRequired"),
            trigger: "blur"
          }
        ],
        client_email: [
          {
            type: "email",
            message: this.$t("invalidEmail")
          },
          {
            required: true,
            message: this.$t("emailIsRequired")
          }
        ],
        phone_number: [
          {
            required: true,
            message: this.$t("phoneNumberIsRequired"),
            trigger: "blur"
          }
        ]
      };
      this.setAdditionalRules();
      this.resetForm();
    }
  },

  created() {
    const self = this;
    this.loading = true;

    const promises = [
      new Promise((resolve, reject) => {
        orderApi
          .getOrderExtraFields()
          .then((res) => {
            if (
              res &&
              res.data &&
              res.data.objects &&
              res.data.objects.length
            ) {
              resolve({
                name: "extraFields",
                value: res.data.objects
              });
            } else {
              resolve({
                name: "extraFields",
                value: []
              });
            }
          })
          .catch((err) => {
            console.error(err);
            reject({
              name: "extraFields",
              error: "Actual error"
            });
          });
      }),
      new Promise((resolve, reject) => {
        paymentMethodApi
          .getActivePaymentMethods()
          .then((res) => {
            if (
              res &&
              res.data &&
              res.data.objects &&
              res.data.objects.length
            ) {
              resolve({
                name: "paymentMethods",
                value: res.data.objects
              });
            } else {
              reject({
                name: "paymentMethods",
                error: "No data found"
              });
            }
          })
          .catch((err) => {
            console.error(err);
            reject({
              name: "paymentMethods",
              error: "Actual error"
            });
          });
      })
    ];

    Promise.all(promises).then((result) => {
      if (result && result.length) {
        result.forEach((obj) => {
          switch (obj.name) {
            case "extraFields":
              self.extraFields = obj.value;
              self.setAdditionalRules();
              break;

            case "paymentMethods":
              self.paymentMethods = obj.value;
              self.selectedPaymentMethodId = obj.value[0].id;
              break;

            default:
              break;
          }
        });
        self.loading = false;
      }
    });
  },

  methods: {
    setAdditionalRules() {
      if (this.extraFields && this.extraFields.length) {
        this.extraFields.forEach((field) => {
          if (field.mandatory) {
            this.rules[field.name] = [
              {
                required: true,
                message: this.$t("valueIsRequired"),
                trigger: "blur"
              }
            ];
          }
        });
      }
    },

    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.createOrder();
        } else {
          return false;
        }
      });
    },

    resetForm() {
      this.$refs.ruleForm.resetFields();
    },

    createOrder() {
      const self = this;
      this.loading = true;
      const cartId = getIt(EXISTING_CART_ID_KEY);
      const appliedVoucher = getIt(APPLIED_VOUCHER_KEY) || "";
      const selectedMethod = this.paymentMethods.find(
        (obj) => obj.id === this.selectedPaymentMethodId
      );
      const isPaypal =
        selectedMethod &&
        selectedMethod.name &&
        selectedMethod.name.toLowerCase() === "paypal";

      orderApi
        .createOrder({
          payment_method_id: self.selectedPaymentMethodId,
          language: self.$i18n.locale,
          time_period: "01-01-2000 00:00:00",
          cart_id: cartId,
          voucher: appliedVoucher,
          ...this.form
        })
        .then((res) => {
          const sessionId = res.data.objects.session_id;
          const paypalURL = res.data.objects.paypal_url;

          if (isPaypal && paypalURL) {
            window.location = paypalURL;
          } else if (!isPaypal && sessionId) {
            // eslint-disable-next-line no-undef
            const stripe = new Stripe(STRIPE_PUBLIC_KEY);
            stripe.redirectToCheckout({ sessionId: sessionId });
          } else {
            this.loading = false;
            self.$router.push("/success");
          }
        })
        .catch((err) => {
          console.error(err);
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.checkout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.app-logo {
  margin: 50px 10px;
  width: 200px;
  height: auto;
  overflow: hidden;
}

img.logo-img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.form {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  overflow: hidden;
}
</style>

<style>
.checkout .ant-form-item {
  margin-bottom: 5px;
}

.checkout .ant-form-item .ant-form-item-label {
  line-height: 1.5;
  padding-bottom: 0px;
}

.checkout .radio-item {
  display: block;
  margin-bottom: 10px;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 770px) {
  .actions,
  .actions .ant-form-item-control {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
