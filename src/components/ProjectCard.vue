<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    objProject: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getImageUrl(image) {
      return image
        ? this.store.baseUrl + "storage/" + image
        : this.store.baseUrl + "storage/default.jpg";
    },
  },
};
</script>

<template>
  <div class="card h-100">
    <img
      :src="getImageUrl(objProject.image)"
      class="card-img-top"
      :alt="objProject.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ objProject.title }}</h5>
      <p class="card-text">{{ objProject.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Author: {{ objProject.author }}</li>
      <li class="list-group-item">
        Creation Date: {{ objProject.creation_date }}
      </li>
      <li class="list-group-item">Last Update: {{ objProject.last_update }}</li>
      <li class="list-group-item">
        Collaborators: {{ objProject.collaborators }}
      </li>
      <li class="list-group-item">
        Technologies:
        <span
          v-for="technology in objProject.technologies"
          :key="technology.name"
        >
          {{ technology.name }},
        </span>
      </li>
      <li class="list-group-item">Type: {{ objProject.type.name }}</li>
    </ul>
    <div class="card-body">
      <a :href="objProject.link_github" class="card-link mx-1 btn btn-warning"
        >Link Github</a
      >
      <!-- <router-link
        :to="{ name: 'projects.show', params: { slug: objProject.slug } }"
        class="btn btn-primary"
        >View</router-link
      > -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
