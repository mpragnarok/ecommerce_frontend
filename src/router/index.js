import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/products'
  },
  {
    path: '/admin/products',
    name: 'admin-products',
    component: () => import('../views/AdminProducts.vue')
  },
  {
    path: '/admin/products/create',
    name: 'admin-products-create',
    component: () => import('../views/AdminProductCreate.vue')
  },
  {
    path: '/admin/products/:id',
    name: 'admin-product',
    component: () => import('../views/AdminProduct.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/furnitures/:id',
    name: 'furnituresItem',
    component: () => import('../views/Furnitures.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes
});

export default router;
