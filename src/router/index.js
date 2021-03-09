import { createRouter, createWebHistory } from "vue-router";
import JobHome from "../views/jobs/Home.vue";
import JobAbout from "../views/jobs/About.vue";
import Jobs from "../views/jobs/jobs/Jobs.vue";
import JobDetail from "../views/jobs/jobs/JobDetail.vue";
import Planer from "../views/planer/Planer.vue";
import Home from "../views/Home.vue"

const routes = [
  // jobs
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/job/home",
    name: "JobHome",
    component: JobHome,
  },
  {
    path: "/job/about",
    name: "About",
    component: JobAbout,
  },
  {
    path: "/job/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/job/jobs/:id",
    name: "JobDetail",
    component: JobDetail,
    props: true,
  },
  // planer
  {
    path: "/planer",
    name: "Planer",
    component: Planer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
