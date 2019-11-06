<template>
  <div class="hello">
    <h3>我是axiosapp，用来发送请求，拦截响应</h3>
    <button @click="getData">get发送请求</button>
    <button @click="postData">post发送请求</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'
import qs from 'qs'
Vue.prototype.$axios = axios;
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data:function(){
    return {
      items:[],
    }
  },
  methods:{
    getData: function(){
      this.$axios.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit:10
        }
      })
        .then((response)=>{
          this.items = response.data.data
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    postData: function(){
      this.$axios.post('url',qs.stringify( {
          page:1,
          limit:10
        })
       
      )
        .then((response)=>{
          this.items = response.data.data
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
