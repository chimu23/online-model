<template>
  <div>
<!-- 头部 -->
<wheader></wheader>

    <!-- 中间显示区域 -->
       <test2></test2>
       <masterlink></masterlink>
         <!-- <button @click="pas">点我点我</button> -->
       <!-- <myvideo  ref="child1" v-show="flag"></myvideo> -->
    
<!-- 底部脚板 -->
<whfooter></whfooter>

  </div>
</template>

<script>
import wheader from './components/header.vue'
import test2 from './test2.vue'
import masterlink from './components/masterlink.vue'
import myvideo from './components/video.vue'
import whfooter from './components/whfooter.vue'
    export default {
      data(){
        return { 
          flag :false
          }
      },
        components: {test2,wheader,masterlink,myvideo,whfooter},
        methods:{
          // pas(){
          //   this.flag=true;
          //   console.log(this.flag)
          // this.$refs.child1.loadvideo('https://feifei.feifeizuida.com/20190929/18925_523713af/index.m3u8'); 
          // }
        }
    }

</script>

<style>
body{
  margin: 0;
  padding: 0;
  
}
</style>