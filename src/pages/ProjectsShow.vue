<script>
import axios from "axios";
import { store } from "../store";
import { router } from "../router";

export default {
  data() {
    return {
      store,
      singleProject: {},
    };
  },
  created() {
    // richiesta axios per i dati del post
    // esempio: http://localhost:8000/api/posts/iusto-hic-libero-culpa-sit-similique
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => {
        response.data.success;
        this.singleProject = response.data.results;
      });
  },
};
</script>

<template>
  <h2>{{ singleProject.title }}</h2>
  <div class="card h-100">
    <img
      class="card-img-top h-100"
      :src="this.store.baseUrl + 'storage/' + singleProject.image"
      :alt="singleProject.title"
    />
  </div>
</template>

<style lang="scss" scoped></style>
