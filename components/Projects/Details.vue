<template>
	<section>
		<aside>
			<div class="project-section">
				<h2 class="project-section__header">
					About Client
				</h2>
				<p>
          {{ projectDetails.client }}
        </p>
			</div>
			<div class="project-section">
				<h2 class="project-section__header">
					Objective
				</h2>
				<p>
          {{ projectDetails.objective }}
        </p>
			</div>
			<div class="project-section">
				<h2 class="project-section__header">
					Tools and technologies
				</h2>
				<p>
					<span v-for="(language, index) in project.languages" :key="index">
            {{ language }}
            <span v-if="index != Object.keys(project.languages).length - 1"> / </span>
          </span>
				</p>
			</div>
		</aside>
		<article>
			<h2 class="project-section__header">
        Project details
      </h2>
			<p class="project-section__text" v-for="parag in projectDetails.text">
				{{ parag }}
			</p>
		</article>
	</section>
</template>

<script setup>
  const route = useRoute();
  const { data } = await useFetch('/api/projects/');

  const project = computed(() => data.value.projects[route.params.id]);
  const projectDetails = computed(() => project.value.details)
</script>

<style scoped lang="scss">
section {
  margin-top: 3.5rem;
  display: flex;
  gap: 2.5rem;

  aside {
    text-align: left;
    width: 33%;

    .project-section {
      margin-bottom: 1.75rem;

      .project-section__header {
        font-size: $text-2xl;
        margin-bottom: 0.5rem;
      }
    }
  }

  article {
    width: 67%;
    text-align: left;

    .project-section__header {
        font-size: $text-2xl;
        margin-bottom: 0.5rem;
      }

    .project-section__text {
      margin-bottom: 1.25rem;
      font-size: $text-large;
    }
  }
}

@media (max-width: $small) {
  section {
    display: block;

    aside {
      width: 100%;
    }

    article {
      width: 100%;
      margin-top: 2.5rem;
    }
  }
}
</style>
