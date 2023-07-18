<script>
import axios from "axios";
import { store } from "../store";
import { router } from "../router";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      store,
      singleProject: {},
      DateTime,
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
  <h1>{{ singleProject.title }}</h1>
  <h2>Last Modified: {{ this.DateTime.now().toFormat("dd-MM-yyyy") }}</h2>
  <div class="card h-100">
    <img
      class="card-img-top h-100"
      :src="this.store.baseUrl + 'storage/' + singleProject.image"
      :alt="singleProject.title"
    />
  </div>
</template>

<style lang="scss" scoped></style>
