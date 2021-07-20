<template>
  <div>
    <div v-for="(item, index) in menu" :key="index">
      <img :src="item.pic">
      <h2>{{ item.name }}</h2>
      <h4>{{ item.content }}</h4>
      <h2>所需食材:</h2>
      <p class="need" v-for="(a,d) in item.material" :key="d">{{a.mname}}：{{a.amount}}</p>
      <h2>烹饪方法:</h2>
      <p class="start" v-for="(a,d) in item.process" :key="'a'+d">
        <img class="pictuer" :src="a.pic">
        {{a.pcontent}}
      </p>
      ---------------------------------------------------
    </div>

    <!-- <div v-for="(item,index) in menu" :key="'a'+index"></div> -->
  </div>
</template>

<script>
import { instance } from "@/utils/api.js";
export default {
  data() {
    return {
      menu: [],
    };
  },
  created() {
    this.selict(); //调用函数
  },
  methods: {
    selict() {
      const classid = this.$route.query.classid; //拿到classid的数据
      instance.get("/byclass", {//拿到数据后对数据操作
          params: {
            appkey: "865d78220fc2c276",
            classid,
            start: 0,
            num: 10,
          },
        })
        .then((res) => {
          this.menu = res.result.list;
        });
    },
  },
};
</script>

<style scoped>
    .need,.start{font-size: 100%;font-size: 20px;display: inline-block;margin-right: 6%;}
</style>