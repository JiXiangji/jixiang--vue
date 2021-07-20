<template>
  <div>
    <div v-for="(item,index) in food" :key="index">
      <h1>{{item.name}}：</h1>
      <img :src="item.pic">
      <h2>所需食材：</h2>
      <p class="need" v-for="(a,b) in item.material" :key="b">{{a.mname}}：{{a.amount}}</p>
      <h2>烹饪方法：</h2>
      <p class="start" v-for="(a,b) in item.process" :key="'a'+b">
        <img :src="a.pic">
        {{a.pcontent}}
      </p>
      ---------------------------------------------------
    </div>
  </div>
</template>

<script>
import { instance } from "@/utils/api.js";
export default {
    data(){
      return{
        food:[]
      }
    },
    created(){
      this.upshot();
    },
    methods:{
      upshot(){
        instance.get("/search", {
          params: {
            keyword: this.$route.query.search,
            num: 10,
            appkey: "c671a4c29ec3381b",
          },
        })
        .then((res) => {
        this.food = res.result.list;
        //console.log(res)
        });
      }
    }
  
};
</script>

<style scoped>
  .need,.start{font-size: 100%;font-size: 20px;display: inline-block;margin-right: 6%;}
</style>