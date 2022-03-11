<template>
  <div class="checkout">
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
        <a-form-model-item ref="name" label="Name" prop="name">
          <a-input
            v-model="form.name"
            @blur="
              () => {
                $refs.name.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="Email" prop="email">
          <a-input
            type="email"
            v-model="form.email"
            @blur="
              () => {
                $refs.email.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="Phone number" prop="phone">
          <a-input
            v-model="form.phone"
            @blur="
              () => {
                $refs.phone.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="Address" prop="address">
          <a-input v-model="form.address" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="actionWrapCol" class="actions">
          <a-button icon="redo" class="action" @click="resetForm">
            Reset
          </a-button>
          <a-button
            type="primary"
            style="margin-left: 10px"
            icon="credit-card"
            class="action"
            @click="onSubmit"
          >
            Pay
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",

  data() {
    return {
      labelCol: { sm: {}, md: { span: 8 } },
      wrapperCol: { sm: {}, md: { span: 10 } },
      actionWrapCol: { sm: {}, md: { span: 9, offset: 9 } },
      other: "",
      form: {
        name: "",
        email: "",
        phone: "",
        address: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input your name",
            trigger: "blur"
          }
        ],
        email: [
          {
            type: "email",
            message: "The input is not valid E-mail!"
          },
          {
            required: true,
            message: "Please input your E-mail!"
          }
        ],
        phone: [
          {
            required: true,
            message: "Please input your contact number",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "Please input your address",
            trigger: "blur"
          }
        ]
      }
    };
  },

  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
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
