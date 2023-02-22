<template>
	<section class="projects-section">
		<h1 class="projects__header">Projects Portfolio</h1>
		<div class="projects__search-grid">
			<h3 class="projects__subheader">
				Search projects by title or filter by category
			</h3>
			<div class="projects__action">
				<div class="projects__search">
					<span class="projects__search-icon">
            <IconSearch />
					</span>
					<input
						v-model="searchProject"
						class="projects__search-bar"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
        <select
          @change="filterProjects"
          name="projects"
          id="projects"
          class="projects__filter"
          v-model="language"
        >
          <option value="">Any language</option>
          <option value="Ruby">
            Ruby/Rails
          </option>
          <option value="Python">
            Python/Django
          </option>
          <option value="JavaScript">
            JavaScript
          </option>
          <option value="Nuxt">
            Nuxt3
          </option>
          <option value="Vue">
            Vue3
          </option>
        </select>
			</div>
		</div>
		<div class="projects__grid">
			<ProjectsCard
				v-for="project in filtProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<script setup>
import { useProjectsStore } from '~~/store/projects';

const projectStore = useProjectsStore()

const searchProject = ref("");
const filtProjects = ref("");
const language = ref("");

onMounted(() => {
  filtProjects.value = projectStore.allProjects;
});

const filterProjects = () => {
  if (language.value === "") {
    filtProjects.value = projectStore.allProjects;
  } else {
    projectStore.filterProjects(language.value);
    filtProjects.value = projectStore.filtProjects;
  }
}

</script>

<style scoped lang="scss">
.projects-section {
  padding-top: 3.5rem;

  .projects__header {
    font-weight: 700;
    font-size: $text-4xl;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .projects__search-grid {
    margin-top: 2.5rem;
  }

  .projects__subheader {
    text-align: center;
    font-size: $text-x-large;
    margin-bottom: 1rem;
    font-weight: 200;
  }

  .projects__action {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $light-gray;
    padding-bottom: 0.75rem;
    gap: 0.5rem;

    .projects__search {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;

      .projects__search-icon {
        background-color: $light-gray;
        padding: 1rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .projects__search-bar {
        padding: 1rem 1.5rem;
        border: 1px solid $gray;
        border-radius: 0.5rem;
        color: $gray;

        &:focus {
          outline: none !important;
          box-shadow: 0 0 2px $green;
        }

        &::-webkit-search-cancel-button {
          -webkit-appearance: none;
          appearance: none;
          height: 10px;
          width: 10px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjEyMy4wNXB4IiBoZWlnaHQ9IjEyMy4wNXB4IiB2aWV3Qm94PSIwIDAgMTIzLjA1IDEyMy4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIzLjA1IDEyMy4wNTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTEyMS4zMjUsMTAuOTI1bC04LjUtOC4zOTljLTIuMy0yLjMtNi4xLTIuMy04LjUsMGwtNDIuNCw0Mi4zOTlMMTguNzI2LDEuNzI2Yy0yLjMwMS0yLjMwMS02LjEwMS0yLjMwMS04LjUsMGwtOC41LDguNQ0KCQljLTIuMzAxLDIuMy0yLjMwMSw2LjEsMCw4LjVsNDMuMSw0My4xbC00Mi4zLDQyLjVjLTIuMywyLjMtMi4zLDYuMSwwLDguNWw4LjUsOC41YzIuMywyLjMsNi4xLDIuMyw4LjUsMGw0Mi4zOTktNDIuNGw0Mi40LDQyLjQNCgkJYzIuMywyLjMsNi4xLDIuMyw4LjUsMGw4LjUtOC41YzIuMy0yLjMsMi4zLTYuMSwwLTguNWwtNDIuNS00Mi40bDQyLjQtNDIuMzk5QzEyMy42MjUsMTcuMTI1LDEyMy42MjUsMTMuMzI1LDEyMS4zMjUsMTAuOTI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
          background-size: 10px 10px;
          cursor: pointer;
        }
      }
    }

    .projects__filter {
      padding: 0.5rem 1rem;
      border: 1px solid $gray;
      border-radius: 0.5rem;
      background-color: $light-gray;

      background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
      background-position: calc(100% - 0.75rem) center !important;
      -moz-appearance:none !important;
      -webkit-appearance: none !important;
      appearance: none !important;
      padding-right: 2rem !important;
      cursor: pointer;

      &:focus {
        border: 1px solid $green;
      }

      &::-ms-expand {
        display: none;
      }
    }
  }

  .projects__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1.5rem;
    gap: 2.5rem;
  }
}

@media (max-width: $large) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $medium) {
  .projects-section .projects__subheader {
    font-size: $text-medium;
  }
}

@media (max-width: $small) {
  .projects-section {
    padding-top: 2.5rem;

    .projects__action {
      .projects__search {
        .projects__search-icon {
          visibility: hidden;
        }

        .projects__search-bar {
          padding: 0.5rem 0.25rem 0.5rem 0.75rem;
          font-size: $text-small;
        }
      }

      .projects__filter {
        font-size: $text-small;
      }
    }

    .projects__grid {
      grid-template-columns: 1fr;
      gap: 0rem;
    }
  }
}
</style>
