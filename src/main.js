import Vue from 'vue'
import App from './App'
import { VueHammer } from 'vue2-hammer'

Vue.use(VueHammer)
VueHammer.config.pan = { threshold: 0 }
VueHammer.config.press = { time: 0 }
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
