<template>
	<NuxtLink
		:to="projectLink"
		class="project-card"
		aria-label="Project Card"
	>
		<div>
			<img
				:src="props.project.img"
				:alt="props.project.title"
				class="project-card__img"
			/>
		</div>
		<div class="project-card__infos">
			<p>
				{{ props.project.title }}
			</p>
			<span>{{ props.project.category }}</span
			>
		</div>
	</NuxtLink>
</template>

<script setup>
const props = defineProps(["project"]);

const projectLink = computed(() => `/projects/${props.project.id}`);
</script>

<style lang="scss" scoped>
.project-card {
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  cursor: pointer;
  background-color: $light-gray;

  &:hover {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  .project-card__img {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    border: none;
  }

  .project-card__infos {
    text-align: center;
    padding: 1.5rem 1rem;

    p {
      font-weight: 600;
      font-size: $text-x-large;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: $text-large;
    }
  }
}

@media (max-width: $small) {
  .project-card {
    margin-bottom: 2.5rem;
  }
}
</style>
