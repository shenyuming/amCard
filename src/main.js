import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/index.js'
import ElementUI from 'element-ui';
import axios from 'axios'
import URLS from '@/utils/api'
import utils from '@/utils/base'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'
Vue.prototype.$message = Message;
// 设置语言
Vue.use(ElementUI);
Vue.use(Vuex);
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
  components: { App },
  template: '<App/>'
})
