import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/pages/Home/TypeNav'
import { reqCategoryList } from './api'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav);

reqCategoryList();

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
