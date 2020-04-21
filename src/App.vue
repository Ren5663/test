<template>
  <div id="app">
    <div id="nav" class="nav">
      <div id="nav-in" class="nav-in">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/list">List</router-link>
        <router-link to="/tick">Tick</router-link>
      </div>
    </div>
    <br />
    <router-view />
    <div id="gotop" class="gotop" @click="gotop()" :style="display">
      <a href="javascript:void(0)">↑</a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "jquery.scrollto";

export default {
  name: "app",

  data() {
    return {
      display: { display: "none" }
    };
  },
  
  mounted() {
    window.addEventListener("scroll", this.showIcon, true);
  },
  
  methods: {
    
    gotop() {
      $.scrollTo("#app", 500);
    },
    
    showIcon() {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 200
      ) {
        this.display = { display: "block" };
      } else {
        this.display = { display: "none" };
      }
    }
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  text-align: justify;
  background: #f78361;
  padding: 0px 30px;
  box-sizing: border-box;
  /* position: fixed; */
}

#nav-in {
  text-align: center;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

#nav-in::-webkit-scrollbar {
  display: none;
}

#nav-in a {
  font-weight: bold;
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  margin: 0px 15px;
  text-align: center;
}

#nav-in a.router-link-exact-active {
  color: #2c3e50;
}

#gotop {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #f78361;
  position: fixed;
  bottom: 45px;
  right: 20px;
  z-index: 999;
}

#gotop a {
  display: block;
  height: 50px;
  line-height: 50px;
  width: 50px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
