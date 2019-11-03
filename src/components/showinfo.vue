<template>
  <div class="showinfo">
<div id="d1"><div><p>{{photolist.title}}</p><p>{{photolist.add_time}} &#12288 {{photolist.zhaiyao}}</p></div><img :src="photolist.img_url"></div>
<div id="d2"><div>
   <p>简介</p>
    <el-divider></el-divider>
<p>{{photolist.article}}</p></div>
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
   <li v-for="(item,index) in list" :key="index"> <el-button type="danger" size="small" :src="item" @click="pas($event)">第{{index+1}}集</el-button></li>
  
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
         myid :this.$route.params.id,
         flag:false,
             value: 3.7,
             list:[], //暂时存放读取的视频集数
             photolist:{} //存放该页对应的图片及介绍
          }
      },
      mounted:function(){
         this. readMylist()
         // this.pas()
      },
      created(){
           this.readMyphoto()
      },
      methods:{
           pas(e){
          var mysrc=''
         mysrc =e.target.parentNode.getAttribute("src")
               //  console.log(mysrc)
              this.flag=true;        
            this.$refs.childvideo.loadvideo(mysrc); 
        
          
            
          },
          readMyphoto(){
             this.axios.get('http://localhost:8080/static/total.json').then((response)=>{
           response.data.message.forEach(item => {
                   if( item.id ==this.myid){
                     this.photolist=item
                 
                   } 
           });     
         console.log(this.photolist)
            }).catch((response)=>{
                console.log(response)
            })

          
          },
          readMylist(){ //根据url的id在resource.json中查找正确的集数，传入list中交给页面渲染
               var now =''
           this.axios.get('http://localhost:8080/static/resource.json').then((response)=>{
           response.data.message.forEach(item => {
                   if( item.id ==this.myid){
                     now=item.src.toString()
                   this.list =now.split(/\s/)
                   } 
           });     
         // console.log(this.list)
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
   /* border: 1px solid red; */
   background-color: #0D253F;
      align-content: center;
  
}
img{
   display: flex;
   margin: auto;
   border: 18px solid #001935;
   border-radius: 5px;
   width: 72%;
   max-height: 80%;
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
   /* border: 1px solid red; */
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
  /* font-size:17px;
  height: 45px;
  width:120px;  */
}
.el-button span{
   width: 200%
}
#d3{
   position: relative;
   width: 84.4%;
   /* border: 1px solid red; */
   height: 200px;
   margin-top: -16px;
   /* padding-left: 60px; */
   margin-left: 70px;
   padding-top: 20px;
   background-color: #0D253F;

}
#d3 button{
   width: 64px;
   margin: 5px;
};
.el-rate{
   position: relative;
   margin-top: 30px;
   margin-left: 40px;
}
#myvideo{
   position: absolute;
   left: 15%;
   top:50px;
   height: 600px;
}

</style>