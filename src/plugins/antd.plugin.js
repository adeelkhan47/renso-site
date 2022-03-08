import Vue from "vue";

import "ant-design-vue/dist/antd.css";

import {
  Avatar,
  Button,
  Card,
  Checkbox,
  DatePicker,
  Empty,
  FormModel,
  Icon,
  Input,
  Layout,
  Radio,
  Statistic,
  Switch,
  TimePicker
} from "ant-design-vue";

Vue.use(Card);
Vue.use(Icon);
Vue.use(Radio);
Vue.use(Empty);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Statistic);
Vue.use(FormModel);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Checkbox);
Vue.use(Switch);

Vue.prototype.$empty = Empty;
// Vue.prototype.$message = message;
// Vue.prototype.$confirm = Modal.confirm;
