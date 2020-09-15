import Vue from "vue";
import Router from "vue-router";
import { GIT_REPO } from "@/constants/base";

Vue.use(Router);

let productionPath = "";

if (process.env.NODE_ENV == "production") {
  productionPath = `/${GIT_REPO}`;
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: `${productionPath}/`,
      component: () => import("@/views/Main"),
      children: [
        {
          path: "choose",
          name: "choose",
          component: () => import("@/components/Choose"),
        },
        {
          path: "charge",
          name: "charge",
          component: () => import("@/components/Charge"),
        },
      ],
    },
    {
      path: `choose`,
      redirect: `${productionPath}/`,
    },
  ],
});
