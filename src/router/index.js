import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/routes/home/Home';
// Authentication
import Auth from '@/components/routes/auth/Auth';
import SignIn from '@/components/routes/auth/signin/SignIn';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'sign-in',
        name: 'Sign In',
        component: SignIn,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
