import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directive from './directive_'
Vue.use(directive)
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
      // 聚焦元素
      el.focus()
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
