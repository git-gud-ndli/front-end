import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Todo from "./views/Todo.vue";
import Food from "./views/Food.vue";
import News from "./views/News.vue";
import Profile from "./views/Profile.vue";
import Settings from "./views/Settings.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboard/todo",
      name: "todo",
      component: Todo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboard/food",
      name: "food",
      component: Food,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboard/news",
      name: "news",
      component: News,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboard/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboard/settings",
      name: "settings",
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["auth/isLoggedIn"]) {
      next({ name: "home" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
