<template>
  <div id="nav">
    <router-link to="/job/home">job-home</router-link> |
    <router-link to="/planer">planer</router-link>
  </div>
  <h1>HOME MAIN</h1>
</template>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
