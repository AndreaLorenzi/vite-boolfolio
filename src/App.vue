<script>
import ProjectNav from "./components/ProjectNav.vue";

export default {
  components: {
    ProjectNav,
  },
};
</script>

<template>
  <ProjectNav />
  <router-view></router-view>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
