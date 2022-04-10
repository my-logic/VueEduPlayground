import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

// Vue.config.silent = true;
// Vue.config.devtools = true;
// Vue.productionTip = false;

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})

