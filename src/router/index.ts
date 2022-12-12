import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
//import MusicView from "../views/MusicView.vue";
//import NewsView from "../views/MusicView.vue";
//import ContactView from "../views/MusicView.vue";

//considered the plugin install method
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: About,
    }
=======
      component: () => import(AboutView),
    },
>>>>>>> parent of dec9667... Re commit
  ],
});

//exports the plugin
export default router;
