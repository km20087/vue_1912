import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from './routers/index';

Vue.config.productionTip = false

Vue.prototype.$axios = axios;//把axios方法挂在Vue的原型下面
//new出来的实例对象就可以调用该方法了，因为实例和原型对象之间有原型链

new Vue({
  router,//5.把router注入到vue里面
  render: h => h(App),
}).$mount('#app')
