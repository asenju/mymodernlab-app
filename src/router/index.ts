import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Callback from '../components/Callback.vue';
import auth from '../auth/authService';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/new',
    name: 'New Project',
    component: () =>
      import('../views/NewProject.vue')
  },
  {
    path: '/project/:id',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import('../views/Project.vue')
  },
  {
    path: '/project/:id/new',
    name: 'New Experiment',
    component: () =>
      import('../views/NewExperiment.vue')
  },
  {
    path: '/project/:id/:ver',
    name: 'Experiment',
    // route level code-splitting
    component: () =>
      import('../views/Experiment.vue')
  },
  {
    path: '/project/:id/:ver/new',
    name: 'New Review',
    component: () =>
      import('../views/NewReview.vue')
  },
  {
    path: '/project/:id/:ver/:review',
    name: 'Review',
    // route level code-splitting
    component: () =>
      import('../views/Review.vue')
  },
  {
    path: '/callback',
    name: 'callback',
    component: Callback
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/callback' || auth.isAuthenticated()) {
    return next();
  }

  auth.login({ target: to.path });
});

export default router;
