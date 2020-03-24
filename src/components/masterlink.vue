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
 <ul  class="phlist">


<li v-for="item in list" :key="item.src"><div><router-link :to="'/showinfo/'+item.id"><img :src="item.img_url" class="imgs"></router-link><span>{{item.title}}</span></div> </li>


 </ul>

<el-pagination
  background
  layout="prev, pager, next"
  :total="pagenumber" @current-change="showpage"   :current-page.sync="currentPage" >
</el-pagination>
  </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        activeName: 'recommend',
        list:[],
        currentPage: 1,
        mytype:'recommend',
        pagenumber:300, //当前应该有多少页

      };
    },
    mounted:function(){
       this.getdata("recommend")
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab.name);
         this.currentPage=1
        // this.$router.push("/"+tab.name);
        
        this.mytype=tab.name
        this.getdata(tab.name)
     
      },
      getdata(type){
        this.list=[]
        var checkpage =this.currentPage
        var prev =checkpage-1
        // var next =checkpage+1
        console.log(prev*15)
            this.axios.get('http://localhost:8080/static/total.json').then((response)=>{
              
              if(type=="recommend"){
                this.pagenumber=parseInt(response.data.rpage) //返回总页数
                  this.list= response.data.message.filter((item,index) => {
                    // console.log(this.currentPage)
                   
                   return index<=(checkpage*15) &&index>(prev*15)}) //根据index判断取回的数据，建立各个json分别存数据
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
showpage(val){

  //  console.log(`当前页: ${val}`);
   this.currentPage=val;
  //  console.log(this.mytype)
   this.getdata(this.mytype)

}
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
  .list .phlist li{
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
 .el-pager{
   position: relative;
   /* width: 200px !important; */
   bottom: -830px;
    left: -765px;
 } 
 .btn-prev{
    position: relative;
   /* width: 200px !important; */
   bottom: -830px;
    left: -680px; 
 } 
  .btn-next{
    position: relative;
   /* width: 200px !important; */
   bottom: -830px;
    left: -1440px; 
 } 
</style>