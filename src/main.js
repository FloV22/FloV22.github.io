import Vue from 'vue';
import App from './App.vue';
import { TimePicker } from 'ant-design-vue';

Vue.use(TimePicker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
