import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 集成mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) // 将mintui所有组件注册成全局组件

// mint-ui是vue的一个插件
// mui和vue无关,而且不支持使用npm安装,是能将mui相关代码拷贝到项目中
// 导入mui样式
import '@/lib/mui/css/mui.min.css'


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})