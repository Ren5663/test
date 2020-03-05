<template>
  <div class="list" id="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,index) in list" :key="index">
        <div class="div-title" @click="clickDisplay(index)" :id="giveTitleId(index)">
          {{ item.title }}
          <div class="div-content" :id="giveContentId(index)" v-html="item.description"></div>
        </div>
        <hr class="div-divider" :id="giveDividerId(index)" />
      </div>
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
import { List } from "vant";
import $ from "jquery";
import "jquery.scrollto";

// Vue.use(Divider);
Vue.use(List);
// Vue.use(Cell);
// Vue.use(CellGroup);

var json = require("./news.json");

export default {
  name: "list",
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    giveTitleId(index) {
      return "title_" + index;
    },
    giveContentId(index) {
      return "content_" + index;
    },
    giveDividerId(index) {
      return "divider_" + index;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(json.rss.channel.item[this.list.length]);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 1000);
    },
    onClick(index) {
      window.open(this.list[index].link, "_self");
      return false;
    },
    clickDisplay(index) {
      $("#title_" + index).css("color", "rgb(197, 194, 194)");
      if ($("#content_" + index).css("display") == "none") {
        $("#content_" + index).slideDown("slow");
        $("#content_" + index).css("color", "black");
      } else {
        $("#content_" + index).css("display", "none");
        if (index == 0) {
          $.scrollTo("#nav", 500);
        } else {
          $.scrollTo("#divider_" + (index-1), 500);
        }
      }
    }
  }
};
</script>

<style>
.div-title {
  width: 85%;
  word-wrap: break-word;
  padding: 0 7.5% 0 7.5%;
  border: 0px;
  margin: 0;
  font: 1.3rem sans-serif;
}
.div-content {
  font: 1rem sans-serif;
  text-align: left;
  display: none;
}
.div-divider {
  width: 85%;
  margin: 3%;
  padding: 0 4.5% 0 4.5%;
}
table {
  display: none;
}
</style>