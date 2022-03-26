import Vue from "vue";

import "./antd.styles.less";

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
  Result,
  Select,
  Spin,
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
Vue.use(Select);
Vue.use(Spin);
Vue.use(Result);

Vue.prototype.$empty = Empty;
// Vue.prototype.$message = message;
// Vue.prototype.$confirm = Modal.confirm;
