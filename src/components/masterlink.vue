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
				
		
            <router-view></router-view>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        activeName: 'recommend'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab.name);
       
        this.$router.push("/"+tab.name);
     
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
</style>