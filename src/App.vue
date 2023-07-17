<script>
import ProjectList from "./components/ProjectList.vue";
import ProjectNav from "./components/ProjectNav.vue";

export default {
  components: {
    ProjectList,
    ProjectNav,
  },
};
</script>

<template>
  <ProjectNav />
  <router-view></router-view>
  <ProjectList />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
