import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Entries from "../views/Entries.vue";
import Inspiration from "../views/Inspiration.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/entries",
    name: "Entries",
    component: Entries,
  },
  {
    path: "/inspiration",
    name: "Inspiration",
    component: Inspiration,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
