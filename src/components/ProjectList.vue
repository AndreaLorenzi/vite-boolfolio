<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      arrProjects: [],
      currentPage: 1,
      nPages: 0,
      activePage: 1, // eventuale parametro
      store,
    };
  },

  methods: {
    toPrevPage() {
      this.currentPage != 1 ? this.currentPage-- : null;
    },
    toNextPage() {
      this.currentPage != this.nPages ? this.currentPage++ : null;
    },
    getProjects() {
      axios
        // oppure link di api esterne
        .get(this.store.baseUrl + "api/projects", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          console.log(response.data.results);
          this.arrProjects = response.data.results.data;
          this.nPages = response.data.results.last_page;
        });
    },
  },
  created() {
    this.getProjects();
  },
  watch: {
    currentPage() {
      this.getProjects();
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col" v-for="project in arrProjects" :key="project.id">
          <ProjectCard :objProject="project" />
        </div>
      </div>
    </div>
  </main>

  <div class="container mt-2">
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage == 1 }">
          <a class="page-link" @click="toPrevPage">Previous</a>
        </li>

        <li
          v-for="page in nPages"
          :key="page"
          class="page-item"
          :class="{ active: page == currentPage }"
        >
          <a class="page-link" href="#" @click="currentPage = page">
            {{ page }}
          </a>
        </li>

        <li class="page-item" :class="{ disabled: currentPage == nPages }">
          <a class="page-link" href="#" @click="toNextPage()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
