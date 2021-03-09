<template>
  <div v-if="job">
    <div class="job-detail">
        <img :src="`https://picsum.photos/id/${job.id}/200/200`" :alt="job.title" srcset="">
      <h2>{{job.title}}</h2>
      <p>{{job.detail}}</p>
    </div>
  </div>
  <div v-else>
      <span>loading...</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/jobs/" + this.id)
      .then((data) => (this.job = data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>