<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useProjectsStore } from './store/projects';

const store = useProjectsStore();

onMounted(() => {
  store.fetchProjects();
});
</script>

<style lang="scss">
@import "~/assets/styles/main.scss"
</style>
