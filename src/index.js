import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuerouter from 'vue-router'
import router from './router.js'  //引用router.js配置的路由
import video from 'video.js'
import 'video.js/dist/video-js.css'
import axios from 'axios' 
import VueAxios from 'vue-axios'
Vue.use(Vuerouter);               //将vue-router注册到Vue

Vue.use(ElementUI);
Vue.prototype.$video = video
Vue.use(VueAxios,axios)

 
var vm = new Vue({
    el: '#app',
    data:{
        msg:'123'
    }, 
    render: h => h(App), 
    router

})