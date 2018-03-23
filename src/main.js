import Vue from 'vue';
import App from './App.vue';
import router from './router';

require('./assets/styles/pure-drawer.css');
require('./assets/styles/app.css');

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    user: null,
  },
  render: h => h(App)
}).$mount('#app');