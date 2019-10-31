<template>
  <div class="list">
 <ul v-for="item in list" :key="item.src" >

<!-- <li><div><img src="https://ae01.alicdn.com/kf/Hacccaa1c8347468eaa94940c2723d60bM.jpg"><span>文字介绍文字介绍文字介绍文字介绍</span></div></li> -->
<li><div><img :src="item.img_url"><span>{{item.title}}</span></div></li>


 </ul>

<el-pagination
  background
  layout="prev, pager, next"
  :total="20" @next-click="gee">
</el-pagination>
  </div>
</template>

<script>
export default {
    data() {
    return {
      list:[]
    };
  },
  mounted(){
      
    this.getdata()

  },
  methods:{
    getdata(){
            this.axios.get('http://localhost:8080/static/total.json').then((response)=>{
              response.data.message.forEach(item => {
                if(item.type=="comic"){
                  this.list.push(item)
                }
                
              });
              // response.data.message[0].title
                // console.log(this.comiclist)
                // console.log('______________')
            }).catch((response)=>{
                console.log(response)
            })
        },
        gee(){
          console.log(11111)
        }
    }
  

}
</script>

<style scoped>

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

