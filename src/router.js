import { createRouter, createWebHistory } from "vue-router";

// Importiamo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import ProjectsIndex from "./pages/ProjectsIndex.vue";
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
  ],
});

export { router };
