<template>
  <div class="plans">
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/project")
      .then((res) => (this.projects = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>