import Vuerouter from 'vue-router'
import recommend from './components/recommend.vue'
import comic from './components/comic.vue'
import comedy from './components/comedy.vue'
import action from './components/action.vue'
import love from './components/love.vue'
import science from './components/science.vue'


var router =new Vuerouter({
    routes:[
        {path:'/',redirect:'/recommend'},
      {path:'/recommend',component:recommend},
      {path:'/comic',component:comic},
      {path:'/comedy',component:comedy},
      {path:'/action',component:action},
      {path:'/love',component:love},
      {path:'/science',component:science}
     

    ],
    
})

export default router;