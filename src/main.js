import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/index.js'
import ElementUI from 'element-ui';
import axios from 'axios'
import URLS from '@/utils/api'
import utils from '@/utils/base'
import VueI18n from 'vue-i18n'
import {Message} from 'element-ui'
import '@/assets/css/common.css'
Vue.prototype.$message = Message;
// 设置语言
Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(Vuex);
const i18n = new VueI18n({
  locale: "zh", // 定义默认语言为中文
  silentFallbackWarn:true,
  messages: {
    zh: require("./assets/languages/zh.json"),
    en: require("./assets/languages/en.json")
  }
});
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.prototype.URLS = URLS;
Vue.prototype.utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
