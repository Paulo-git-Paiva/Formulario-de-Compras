import Vue from "vue";
import VueRouter from "vue-router";
import TesteFrontEnd from "../components/TesteFrontEnd.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TesteFrontEnd",
    component: TesteFrontEnd,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
