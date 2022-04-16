import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'

// Vue.config.silent = true;
// Vue.config.devtools = true;
// Vue.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App)
})

