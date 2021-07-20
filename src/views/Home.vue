<template>
  <div class="home">
    <!-- 搜索方式 -->
    <input  class="aaa" type="text" v-model.trim="search" @keyup.enter="upshot(search)" placeholder="请输入美食名称">
    <!-- 传参 -->
    <!-- 分类方式 -->
    <div class="qqq" v-for="(item,index) in effect" :key="index" @click="touch(index)">{{item.name}}</div>
    <!-- 具体分类 -->
    <div class="content" v-for="(item,index) in sort" :key="'c'+index"
     @click="select(item.classid)"
     >{{item.name}}</div>    <!-- 查询需要用到classid,所以这里要传参。    角标最好不要重复 -->
    
  </div>
</template>

<script>
import { instance } from "@/utils/api.js";
export default {
  // name: "Home",
  data(){
    return{
      search:"",
      effect:[],//data里的数据
      sort:[] //功效的分类里面的数据
    }
  },
  
  created() {
    this.loadDate();
  },
  methods:{
    //分类函数
    loadDate() {
      instance.get("/class",{
         params: {
          appkey: "c671a4c29ec3381b", 
        },
      })
      .then((res) => {
        //定义数据
        this.effect=res.result
        this.sort=this.effect[0].list.slice(0,10)//页面不为空，默认选择第一个功效里的分类
      })
    },
    //功效栏的点击事件
    touch(index){
      this.sort=this.effect[index].list.slice(0,10)//截取功效分类里面的前10个数据
    },
    //查询分类内容
    select(classid){//把classid带到新的页面中获取数据
      this.$router.push("/details?classid="+classid)//通过js实现路由的跳转跳转
    },
    
    //搜索函数
    upshot(search) {//传形参
        //this.$router.push({name:'search',params:{search_data:this.search}})
        this.$router.push({path:"/search?search="+search})//搜索内容跳转新的页面
    },
  }
}
</script>
<style scoped>
 .aaa{width: 100%;height: 50px;}
 .qqq{padding: 6px 10px;border-radius: 2px;background: orange;color: white;
 display: inline-block;margin-top: 6px;margin-right: 2px;}
 .content{width: 46%;height: 80px;background: rgb(6, 241, 218);color: white;text-align: center;
 line-height: 100px;display: inline-block;margin-top: 6px;margin-right: 2%;}
</style>