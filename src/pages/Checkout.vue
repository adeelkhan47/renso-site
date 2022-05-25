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
              :disabled="!isReady || (!privacy && privacyPolicyLink)"
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
import { orderApi } from "../apis";
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
      extraFields: []
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
    this.loading = true;
    orderApi
      .getOrderExtraFields()
      .then((res) => {
        if (res && res.data && res.data.objects && res.data.objects.length) {
          this.extraFields = res.data.objects;
          this.setAdditionalRules();
        }
        this.loading = false;
      })
      .catch((err) => {
        console.error(err);
        this.loading = false;
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
      orderApi
        .createOrder({
          language: self.$i18n.locale,
          time_period: "01-01-2000 00:00:00",
          cart_id: cartId,
          voucher: appliedVoucher,
          ...this.form
        })
        .then((res) => {
          const sessionId = res.data.objects.session_id;
          this.loading = false;
          if (!sessionId) {
            self.$router.push("/success");
          } else {
            // eslint-disable-next-line no-undef
            const stripe = new Stripe(STRIPE_PUBLIC_KEY);
            stripe.redirectToCheckout({ sessionId: sessionId });
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
