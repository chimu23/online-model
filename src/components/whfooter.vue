<template>
  <div class="myfooter">
      <p><el-button type="danger" >版权、合作：Muliice.com .</el-button></p>
      <p><el-button type="text">OnLineSee © 2019 Powered by  Vue .</el-button></p>
       <p><el-button type="text">本站 暂无 赞助 .</el-button></p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.myfooter{
    position: relative;
    background-color: #001935 !important;
    text-align: center;
   
    top:-2px;
    padding-bottom: 15px;
    padding-top: 15px;
    
  
}
.myfooter p{
    margin: 0;
}
.el-button{
    padding:5px;
    
}
</style>