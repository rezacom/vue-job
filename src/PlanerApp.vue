<template>
  <div id="nav">
    <router-link to="/planer">Planer</router-link> |
    <router-link to="/planer/add">add plan</router-link>
  </div>
  <router-view />
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #eee;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
