
<template>
<div class="lunbo">
  <el-carousel :interval="3000" type="card" height="220px">
    <el-carousel-item v-for="item in imgs" :key="item.src">
      <h3 class="medium"><img :src="item.src" @click="myload"></h3>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>

export default{
    data(){
        return{
            imgs:[
                {"src":"http://pic0.iqiyipic.com/common/lego/20191028/a1969b7547b448ad93840a2f7caff6bd.jpg"},
                {"src":"http://pic1.iqiyipic.com/common/lego/20191029/e76691affa1c489b8a7d50934b6e8cfd.jpg"},
                {"src":"http://pic1.iqiyipic.com/common/lego/20191027/0b1e44190713461694435d578ff9cbf4.jpg"},
                {"src":"http://pic2.iqiyipic.com/common/lego/20191029/3a7228bbfda74b3cadd24013bd35a8ab.jpg"},
                {"src":"http://pic1.iqiyipic.com/common/lego/20191029/c914d67f448e4634872930e760895e69.jpg"},

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
    
   
  }
  .lunbo{
    background-color: #001935;
  }
</style>