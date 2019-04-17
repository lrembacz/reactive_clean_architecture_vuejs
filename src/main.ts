import Vue from 'vue';
import VueRx from 'vue-rx';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRx);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
