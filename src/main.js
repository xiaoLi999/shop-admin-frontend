import Vue from 'vue'
import App from './App.vue'

//  1.1 引入element-ui
import ElementUI from "element-ui";
//  1.2 引入element-ui样式
import "element-ui/lib/theme-chalk/index.css";
//  2.1 引入axios
import axios from "axios";

//  1.3 全局注册组件
Vue.use(ElementUI);

Vue.config.productionTip = false;
//  2.2 把axios绑定到vue实例的属性$axios
// 给vue的构造函数的原型链添加$axios
Vue.prototype.$axios=axios;


new Vue({
  render: h => h(App),
}).$mount('#app')
