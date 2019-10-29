import Vue from 'vue/dist/vue.js'
import Web from './Web.vue'


 
var vm = new Vue({
    el: '#app',
    data:{
        msg:'123'
    }, 
    render: function(h) {
        return h(Web)
    }

})