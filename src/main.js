import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'
import './common/css/base.css'
import './common/css/common.css'
import './common/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './util/http'

Vue.config.productionTip = false

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  // created() {
  //   console.log("test");
  //   axios.get('/query');
  // }
})
