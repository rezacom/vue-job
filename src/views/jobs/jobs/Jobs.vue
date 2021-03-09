<template>
  <div class="job-page">
    <h2>Jobs</h2>

    <div v-if="jobs.length > 0" class="jobs">
      <div v-for="job in jobs" :key="job.id" class="jobs__item">
        <img :src="`https://picsum.photos/id/${job.id}/200/200`" alt="" />
        <div class="jobs__item_content">
          <router-link
            :to="{ name: 'JobDetail', params: { id: job.id } }"
            class="jobs__item_title"
          >
            <h3>{{ job.title }}</h3>
          </router-link>
          <p>
            {{ job.detail }}
          </p>
          <router-link
            :to="{ name: 'JobDetail', params: { id: job.id } }"
            class="jobs__item_btn"
          >
            <span>view more</span>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/jobs")
      .then((data) => (this.jobs = data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.jobs {
  margin: 30px 0;
}
.jobs__item {
  display: flex;
  margin-bottom: 30px;
  text-align: left;
}

.jobs__item img {
  margin-right: 20px;
}
.jobs__item_btn {
  background: green;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  display: inline-block;
}
.jobs__item_title {
  text-decoration: none;
}
.jobs__item_title h3 {
  margin-top: 0;

}
</style>