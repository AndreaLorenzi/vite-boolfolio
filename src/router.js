import { createRouter, createWebHistory } from "vue-router";

// Importiamo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import ProjectsIndex from "./pages/ProjectsIndex.vue";
import ProjectsShow from "./pages/ProjectsShow.vue";
import AppAbout from "./pages/AppAbout.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsIndex,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: ProjectsShow,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
  ],
});

export { router };
