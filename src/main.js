// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";

import Home from "./views/Home";
import Pets from "./views/Pets";

// Routing
const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets }
];
const router = new VueRouter({ routes });

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
