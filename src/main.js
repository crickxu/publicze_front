// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';
import '@/styles/main.css';
//import { createPinia } from "pinia";
//import { createPinia, PiniaVuePlugin } from 'pinia/dist/pinia.cjs';
//import BootstrapVue from 'bootstrap-vue';
//import IconsPlugin from 'bootstrap-vue';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
//import 'bootstrap/dist/js/bootstrap.bundle.js';
//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);
//const pinia = createPinia();
Vue.config.productionTip = false
Vue.use(ElementUI);
//Vue.use(pinia);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
