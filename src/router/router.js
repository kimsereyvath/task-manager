import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/authentication/Login.vue'
import Register from '../views/authentication/Register.vue'
import TaskAll from '../views/tasks/TaskAll.vue'
import TaskCreate from '../views/tasks/TaskCreate.vue'
import TaskEdit from '../views/tasks/TaskEdit.vue'
import * as auth from '../services/AuthService.js'

Vue.use(VueRouter)

//const isLoggedIn = false;

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'task-all',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: TaskAll,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/tasks/new',
    name: 'task-create',
    component: TaskCreate,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/tasks/:id',
    name: 'task-edit',
    component: TaskEdit,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (!auth.isLoggedIn()) {
        next();
      } else {
        next('/');
      }
    }
  },
  {
    path: '*',      //if goes to the route that doesn't exist
    redirect: '/'   //go to home
  }
]


const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

//create gurad for navigation panel like user must login before routing.....
/*router.beforeEach((to, from, next) => {
  //Evluate condition
  //next('/home')
  //next(false)
  if (isLoggedIn) {
    next();
  }
  else {
    next('/login');
  }
});*/

export default router
