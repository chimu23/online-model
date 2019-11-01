<template>
  <div class="masterlink">
 <el-tabs id="avig" v-model="activeName" @tab-click="handleClick">
  <el-tab-pane label="推荐" name="recommend"  ></el-tab-pane>
    <el-tab-pane label="喜剧" name="comedy" ></el-tab-pane>
    <el-tab-pane label="动作" name="action"></el-tab-pane>
    <el-tab-pane label="爱情" name="love"></el-tab-pane>
    <el-tab-pane label="科幻" name="science"></el-tab-pane>
    <el-tab-pane label="动漫" name="comic"></el-tab-pane>
  </el-tabs>
				
		
              <div class="list">
 <ul >


<li  v-for="item in list" :key="item.src"><div><router-link :to="'/showinfo/'+item.id"><img :src="item.img_url" class="imgs"></router-link><span>{{item.title}}</span></div> </li>


 </ul>


  </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        activeName: 'recommend',
        list:[]

      };
    },
    mounted:function(){
       this.getdata("recommend")
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab.name);
       
        // this.$router.push("/"+tab.name);
        this.getdata(tab.name)
     
      },
      getdata(type){
        this.list=[]
            this.axios.get('http://localhost:8080/static/total.json').then((response)=>{
              if(type=="recommend"){
                  this.list= response.data.message.filter((item,index) => {
                   return item.id<15})
              }
              response.data.message.forEach(item => {
                if(item.type==type){
                  this.list.push(item)
                }
                
              });
         
            }).catch((response)=>{
                console.log(response)
            })
        },

    }
  };
</script>

<style>
.masterlink {
   width: 100%;
   height: 950px;

  border-bottom: 1px solid #E4E7ED;
  background-color: #0D253F;
}
.el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #FFF !important;
    position: relative;
    
}
#avig{
    width: 370px;
    padding-left: 35%;
    padding-top:10px;

}
.list ul{
  width:1000px;
  height:auto;
  margin-left: 90px;
  font-size: 15px;
  color: #CCD1D6;
    
  }
  .list li{
    list-style: none;
    float: left;
   width: 150px;
   height: 250px;
   margin:15px 20px;
   
  }
   .list li img{
     max-width: 150px;
     height: 210px !important;
     margin-bottom: 10px;
   }
</style>