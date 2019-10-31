<template>
  <div class="list">
 <ul v-for="item in list" :key="item.src" >

<!-- <li><div><img src="https://ae01.alicdn.com/kf/Hacccaa1c8347468eaa94940c2723d60bM.jpg"><span>文字介绍文字介绍文字介绍文字介绍</span></div></li> -->
<li><div><img :src="item.img_url"><span>{{item.title}}</span></div></li>


 </ul>


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
      console.log('aaaaaaaaaaaaaaa')
    this.getdata()

  },
  methods:{
    getdata(){
            this.axios.get('http://localhost:8080/static/total.json').then((response)=>{
              response.data.message.forEach(item => {
                if(item.type=="action"){
                  this.list.push(item)
                }
                
              });

            }).catch((response)=>{
                console.log(response)
            })
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

