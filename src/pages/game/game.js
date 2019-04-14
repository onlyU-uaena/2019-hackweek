// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import game from './game.vue'
import router from './router/game'
import {instance} from '../../api/index'
import lottie from 'vue-lottie';

Vue.config.productionTip = false
Vue.prototype.$http = instance
Vue.component('lottie', lottie)

/* eslint-disable no-new */
new Vue({
  el: '#game',
  router,
  template: '<game/>',
  components: { game }
})
