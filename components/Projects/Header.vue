<template>
	<header>
		<!-- Project heading and meta info -->
		<h1 class="project__header">
			{{ project.title }}
    </h1>
		<div class="project__infos">
			<div class="project__time-info">
				<IconClock />
				<span>
          {{ projectDate }}
        </span>
			</div>
			<div class="project__category-info">
				<IconTag />
				<span v-for="(category, index) in project.categories" :key="index" class="project-tag">
          {{ category }}
          <span v-if="index != Object.keys(project.categories).length - 1">/</span>
        </span>
			</div>
		</div>
    <div class="project__img">
      <img
        :src="projectImg"
        class="project__img"
        alt="Project title"
      />
    </div>
	</header>
</template>

<script setup>
import dateFormat from "dateformat";

const route = useRoute();
const { data } = await useFetch('/api/projects/');

const project = computed(() => data.value.projects[route.params.id]);

const projectImg = computed(() => `/${project.value.img}`)

const projectDate = computed(() => {
  const date = new Date(project.value.createdAt.year, project.value.createdAt.month)
  return dateFormat(date, "mmm yyyy")
})
</script>

<style scoped lang="scss">
.project__header {
  text-align: left;
  font-size: $text-4xl;
  font-weight: bold;
  margin-top: 5rem 0 1.75rem 0;
}

.project__infos {
  display: flex;

  .project__time-info {
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    span {
      margin-left: 0.5rem;
    }
  }

  .project__category-info {
    display: flex;
    align-items: center;

    .project-tag {
      margin-left: 0.25rem;
    }
  }
}

.project__img {
  margin-top: 3rem;

  img {
    border-radius: 0.75rem;
    cursor: pointer;
  }
}

@media (max-width: $small) {
  .project__header {
    margin-top: 3.5rem;
    font-size: $text-3xl;
  }

  .project__img img {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
}
</style>
