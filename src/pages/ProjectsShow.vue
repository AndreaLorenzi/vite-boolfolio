<script>
import axios from "axios";
import { store } from "../store";
import { router } from "../router";
import { DateTime } from "luxon";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },

  data() {
    return {
      store,
      singleProject: {},
      DateTime,
      is404: false,
    };
  },
  created() {
    // richiesta axios per i dati del post
    // esempio: http://localhost:8000/api/posts/iusto-hic-libero-culpa-sit-similique
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => {
        if (response.data.success) {
          this.singleProject = response.data.results;
        } else {
          // this.$router.push({
          //   name: "page404",
          // });
          this.is404 = true;
        }
      });
  },
};
</script>

<template>
  <App404 v-if="is404" />
  <template v-else-if="singleProject">
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
</template>

<style lang="scss" scoped></style>
