<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img alt="Home" src="home.png" /></router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/rickard">Rickard</router-link>
    </div>
    <router-view />
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
  text-align: left;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
