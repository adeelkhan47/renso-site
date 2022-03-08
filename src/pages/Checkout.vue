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
        <a-form-model-item ref="name" label="Customer name" prop="name">
          <a-input
            v-model="form.name"
            @blur="
              () => {
                $refs.name.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item label="Instant delivery" prop="delivery">
          <a-switch v-model="form.delivery" />
        </a-form-model-item>
        <a-form-model-item label="Activity type" prop="type">
          <a-checkbox-group v-model="form.type">
            <a-checkbox value="1" name="type"> Online </a-checkbox>
            <a-checkbox value="2" name="type"> Promotion </a-checkbox>
            <a-checkbox value="3" name="type"> Offline </a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="Resources" prop="resource">
          <a-radio-group v-model="form.resource">
            <a-radio value="1"> Sponsor </a-radio>
            <a-radio value="2"> Venue </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="Description" prop="desc">
          <a-input v-model="form.desc" type="textarea" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="actionWrapCol">
          <a-button @click="resetForm"> Reset </a-button>
          <a-button type="primary" style="margin-left: 10px" @click="onSubmit">
            Pay Now
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
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
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
