import Vue from 'vue/dist/vue.js'
import Web from './Web.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);


 
var vm = new Vue({
    el: '#app',
    data:{
        msg:'123'
    }, 
    render: h => h(Web)
    }

)