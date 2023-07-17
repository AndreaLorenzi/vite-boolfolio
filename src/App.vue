<script>
import ProjectList from "./components/ProjectList.vue";

export default {
  components: {
    ProjectList,
  },
};
</script>

<template>
  <router-view></router-view>
  <ProjectList />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
