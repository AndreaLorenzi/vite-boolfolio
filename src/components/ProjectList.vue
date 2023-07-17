<script>
import axios from "axios";
import { store } from "../store";
export default {
  components: {},
  data() {
    return {
      arrProjects: [],
      page: 1, // eventuale parametro
      store,
    };
  },

  methods: {
    getProjects() {
      axios
        // oppure link di api esterne
        .get("http://localhost:8000/api/projects", {
          // eventuali parametri
          params: {
            page: this.page,
          },
        })
        .then((response) => (this.arrProjects = response.data.data));
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div class="container">
    <div v-for="project in arrProjects" :key="project.id">
      {{ project.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
