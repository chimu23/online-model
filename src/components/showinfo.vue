<template>
  <div class="showinfo">
<div id="d1"><div><p>我的英雄学院 第四季</p><p>2019-12-07 17:30 新番 热血 战斗 漫画改 推荐</p></div><img src="https://ae01.alicdn.com/kf/Hacccaa1c8347468eaa94940c2723d60bM.jpg"></div>
<div id="d2"><div>
   <p>简介</p>
    <el-divider></el-divider>
<p>大部分的人类，在这个时代里都拥有名为「个性」的力量，但有力量之人却不一定都属于正义的一方。只要邪恶出现的地方，必定会有英雄挺身而出拯救众人。一名天生没有力量的少年 —— 绿谷出久从小就憧憬一位顶尖英雄，而他的梦想就是成为伟大的英雄，可是，没有力量的他能实现自己的梦想吗？虽然困难重重，少年却依旧不放弃，朝着自己的目标勇往前进！</p></div>
 <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
 </div>
 
<div id="d3"> 
  <ul>
     <!-- <button @click="pas">点击播放</button> -->
   <li v-for="(item,index) in list" :key="index"> <el-button type="danger" size="small" :src="item" @click="pas">危险按钮</el-button></li>
  
   </ul>
</div>
<myvideo id="myvideo" ref="childvideo" v-show="flag"></myvideo>
</div>
</template>

<script>
// import wheader from './components/header.vue'
// import whfooter from './components/whfooter.vue'
// import myvideo from './components/video.vue'
import myvideo from './video.vue'
export default {
     data(){
        return { 
         //  id :this.$route.prams.id
         flag:false,
             value: 3.7,
             list:[] //暂时存放读取的视频集数
          }
      },
      mounted:function(){
         this.pas()
      },
      methods:{
           pas(){
              console.log(this.$route.params.id)
            //   this.flag=true;        
            // this.$refs.childvideo.loadvideo('https://feifei.feifeizuida.com/20190929/18925_523713af/index.m3u8'); 
            var now =''
           this.axios.get('http://localhost:8080/static/resource.json').then((response)=>{
           response.data.message.forEach(item => {
                   if( item.id ==1){
                     now=item.src.toString()
                   this.list =now.split(/\s/)
                   }
                  
                  
              
           });
             
             
                 
                
                
             
         console.log(this.list)
            }).catch((response)=>{
                console.log(response)
            })
            
          }
      },
   components: {myvideo},
}
</script>

<style scoped>
.showinfo{
   padding-top:10px;
   position: relative;
   background-color:#001935;
   width: 100%;
   height: 1200px;
   
}
li{
   list-style: none;
}
#d1{
   position: relative;
   padding-top: 5px;
   margin-left: 70px;
   width: 40%;
   height: 620px;
   border: 1px solid red;
   background-color: #0D253F;
      align-content: center;
  
}
img{
   display: flex;
   margin: auto;
   border: 18px solid #001935;
   border-radius: 5px;
   width: 72%
}
#d1 div:nth-child(1){
  
   width: 100%;
 text-align: center;
 font-size: 15px;
 color: #CFD3D9;
}

#d2{
  
    position: absolute;
    top:10px;
    right: 60px;
   padding-top: 5px;
   width: 40%;
   margin-right: 60px;
      height: 620px;
   border: 1px solid red;
   background-color: #0D253F;
      align-content: center;

}
#d2 p:nth-child(1){
   font-size: 25px;
   font-weight: 600;
   color: #c9ced4;
   padding-left: 20px;
   /* text-indent:2em;  */

}
#d2 p:nth-child(3){
 background-color: #001935;
   color: #c9ced4;
   /* padding: 20px; */
   text-indent:2em; 
   border: 20px solid  #001935;
   border-radius: 15px;

}
.el-button{
   display: flex;
   float: left;
   margin: 5px;
  font-size:17px;
  height: 45px;
  width:120px;
}
#d3{
   width: 100%;
   border: 1px solid red;
   height: 200px;
   margin-top: 10px;
   background-color: #0D253F;

}
.el-rate{
   position: relative;
   margin-top: 30px;
   margin-left: 30px;
}
#myvideo{
   position: absolute;
   left: 15%;
   top:50px;
   height: 600px;
}

</style>