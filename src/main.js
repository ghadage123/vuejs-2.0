import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './Http.vue'

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
