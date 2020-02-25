<template>
  <div class="about">
    <h1 @click="onClick">This is an about page</h1>
    <div v-for="(site,index) in info" :key="index">{{ site.name }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null
    };
  },
  methods: {
    onClick() {
      axios
        .get("/geturl")
        .then(response => (this.info = response.data.sites))
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    }
  },
};
</script>

<style>
</style>