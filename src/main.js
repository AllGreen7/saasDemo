import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
// import App2 from './app2.vue'
import '@/style/index.scss' // global css
import router from '@/router'

Vue.use(ElementUI);
Vue.config.productionTip = false

// Vue.component('custom-input', {
//   props: ['value'],
//   template: `
//     <input
//       v-bind:value="value"
//       v-on:input="$emit('input', $event.target.value)"
//     >
//   `
// })

new Vue({
  render: h => h(App),
  data:{
    a:1,
    b:7
  },
  router,
}).$mount('#app')
//在此处声明的data会直接挂载在vue实例上

// new Vue({
//   render: h => h(App2),
//   router,
// }).$mount('#app2')
