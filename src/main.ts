import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import AuthPlugin from './plugins/auth';
Vue.use(AuthPlugin);

import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  provide: createProvider(),
  render: h => h(App)
}).$mount('#app');
