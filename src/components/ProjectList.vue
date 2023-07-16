<script>
import axios from "axios";
export default {
  data() {
    return {
      arrProjects: [],
      page: 1, // eventuale parametro
    };
  },

  mounted: {
    getProjects() {
      axios
        // oppure link di api esterne
        .get("http://localhost:8000/api/projects", {
          // eventuali parametri
          params: {
            page: this.page,
          },
        })
        .then((response) => (this.arrProjects = response.data));
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <div v-for="project in arrProjects" :key="project.id">
    {{ project.title }}
  </div>
  <div></div>
</template>

<style lang="scss" scoped></style>
