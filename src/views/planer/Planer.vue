<template>home</template>

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
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>