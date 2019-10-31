<template>
  <div class="myheader">
<a href="/"><svg t="1572418168057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="921" width="40" height="40"><path d="M512 113c220 0 399 179 399 399S732 911 512 911 113 732 113 512s179-399 399-399m0-42C268.4 71 71 268.4 71 512s197.4 441 441 441 441-197.4 441-441S755.6 71 512 71z" p-id="922" fill="#bfbfbf"></path><path d="M440.3 697.6c-29.9 0-54.3-24.3-54.3-54.3V380.6c0-29.9 24.4-54.3 54.3-54.3 9.4 0 18.7 2.5 27 7.3L694.9 465c17 9.8 27.1 27.4 27.1 47s-10.1 37.2-27.1 47L467.4 690.3c-8.4 4.8-17.7 7.3-27.1 7.3z m0-329.2c-5.9 0-12.3 4.7-12.3 12.3v262.7c0 10.3 10.9 14.9 18.4 10.6l227.5-131.4c5.5-3.2 6.1-8.4 6.1-10.6s-0.6-7.4-6.1-10.6L446.4 370c-2-1.1-4-1.6-6.1-1.6z" p-id="923" fill="#bfbfbf"></path></svg>
</a>
<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"  class="myserach"
></el-autocomplete>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
<div class="lineborder">欢迎使用OnLineSee，祝您生活愉快~</div>

  </div>
</template>

<script>
 export default {
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "海贼王", "address": "长宁区新渔路144号" },
          { "value": "双子杀手", "address": "上海市长宁区淞虹路661号" },
          { "value": "诛仙", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "我的英雄学院", "address": "天山西路438号" },
          { "value": "刀剑神域", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "回到未来", "address": "上海市长宁区金钟路633号" }
                   
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>

<style>
.myheader{
    background-color: #0D253F;
}
.icon{
 position: relative;
 top: 15px;
 padding:0 7px;
 
}
.myserach{
        width: 240px;
        margin-left: 10px;
        padding-bottom: 10px;
    }
.lineborder{
        width: 100%;
        border-top: 1px solid #21374F;
        border-bottom: 1px solid #21374F;
        padding:5px 0;
        padding-left: 10px;
        color: #FFFFFF;
        font-size: 14px;
     
  
    }
</style>