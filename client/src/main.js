import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(require('vue-moment'));

new Vue({
  el: '#app',
  router,
  template: '<App/>',  // .$mount('#app')
  render: h => h(App),
})  
