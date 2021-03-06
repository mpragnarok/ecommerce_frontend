import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [{
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
    path: '/admin/coupons',
    name: 'admin-coupons',
    component: () => import('../views/AdminCoupons.vue')
  },
  {
    path: '/admin/orders',
    name: 'admin-orders',
    component: () => import('../views/AdminOrders.vue')
  },
  {
    path: '/admin/payments',
    name: 'admin-payments',
    component: () => import('../views/AdminPayments.vue')
  },
  {
    path: '/admin/logs',
    name: 'admin-logs',
    component: () => import('../views/AdminLogs.vue')
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
    path: '/furnitures',
    name: 'furniturePagination',
    component: () => import('../views/FurniturePagination.vue')
  },
  {
    path: '/furnitures/search',
    name: 'furnitures-Search',
    component: () => import('../views/FurnitureSearch.vue')
  },
  {
    path: '/furnitures/:id',
    name: 'furnituresItem',
    component: () => import('../views/Furnitures.vue')
  },
  {
    path: '/users/:id',
    name: 'usersProfile',
    component: () => import('../views/UsersProfile.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/orders/success',
    name: 'orderSuccess',
    component: () => import('../views/OrderSuccess.vue')
  },
  {
    path: '/orders/fails',
    name: 'orderFailed',
    component: () => import('../views/OrderFailed.vue')
  },
  {
    path: '/orders/:userId',
    name: 'order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/orders/',
    name: 'orders',
    component: () => import('../views/Orders.vue')
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

router.beforeEach(async (to, from, next) => {
  await store.dispatch('getCurrentUser');

  const userState = store.state;
  let credit = userState.isAuthenticated;
  let isAdmin = userState.currentUser.isAdmin;
  if (
    !credit &&
    to.name !== 'SignIn' &&
    to.name !== 'SignUp' &&
    to.name !== 'furniturePagination' &&
    to.name !== 'furnitures-Search' &&
    to.name !== 'furnituresItem' &&
    to.name !== 'cart' &&
    to.name !== 'home'
  ) {
    next('/signin');
    return;
  }

  if (credit) {
    if (to.name === 'SignIn' || to.name === 'Signup') {
      next('/');
      return;
    }
  }

  if (credit && isAdmin === false) {
    if (to.path.includes('/admin')) {
      next('/404');
      return;
    }
  }

  next();
})

export default router;