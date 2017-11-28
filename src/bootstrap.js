import Vue from 'vue';

vue.config.debug = process.env.NODE_ENV !== 'production';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [],
});

import './assets/sass/app.scss';

export default {
  router,
};
