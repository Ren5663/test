<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/list">List</router-link>
    </div>
    <br>
    <router-view />
    <div class="gotop">
      <a href="#">↑</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

#app {
  padding: 0px;
  margin: 0px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

a {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
  overflow-y: hidden;
  backface-visibility: hidden;
  perspective: 1000;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-overflow-scrolling: touch;
  text-align: justify;
  background: #f78361;
  padding: 0px 30px;
  box-sizing: border-box;
  /* position: fixed;
            z-index: 999; */
}

/* .content{
            position: relative;
            top: 50px;
            z-index: 0;
        } */

.nav a {
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  margin: 0px 15px;
  text-align: center;
}

.gotop {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: #f78361;
  position: fixed;
  bottom: 45px;
  right: 20px;
  z-index: 999;
}

.gotop a {
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
}

a:active {
  color: #000;
}

.nav::-webkit-scrollbar {
  display: none;
}
</style>
