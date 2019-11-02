<template>
<div class="lunbo">
  <el-carousel :interval="3000" type="card" height="220px">
    <el-carousel-item v-for="item in imgs" :key="item.src">
      <h3 class="medium"><router-link :to="'/showinfo/'+item.id"><img :src="item.src" @click="myload"></router-link></h3>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>

export default{
    data(){
        return{
            imgs:[
                {"src":"http://pic1.iqiyipic.com/common/lego/20191030/f2b1f12660da4e3baacb0b3b031ee9b7.jpg","id":"100"},
                {"src":"http://pic1.iqiyipic.com/common/lego/20191029/e76691affa1c489b8a7d50934b6e8cfd.jpg","id":"101"},
                {"src":"http://pic1.iqiyipic.com/common/lego/20191027/0b1e44190713461694435d578ff9cbf4.jpg","id":"102"},
                {"src":"http://pic2.iqiyipic.com/common/lego/20191029/3a7228bbfda74b3cadd24013bd35a8ab.jpg","id":"103"},
                {"src":"http://pic1.iqiyipic.com/common/lego/20191029/c914d67f448e4634872930e760895e69.jpg","id":"104"},

            ]
        }
    },
    methods:{
      myload(){
        console.log('ok')
      }
    }
}

</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lunbo img{
    width:120%;
    height: 220px;
    
   
  }
  .lunbo{
    background-color: #001935;
  }
</style>