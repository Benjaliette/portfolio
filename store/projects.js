import { defineStore } from 'pinia';
import { mande } from 'mande';
const api = mande('/api');

export const useProjectsStore = defineStore({
  id: 'projects-store',
  state: () => {
    return {
      projects: [],
      filteredProjects: []
    }
  },
  actions: {
    async fetchProjects() {
      this.projects = [];
      try {
        const response = await api.get("projects");
        Object.values(response.projects).forEach(project => {
          this.projects.push(project);
        });
      } catch (error) {
        console.log(error);
        throw error
      }
    },
    async filterProjects(language) {
      this.filteredProjects = this.projects.filter((project) => project.languages.includes(language))
    },
    async searchThroughProjects(input) {
      this.filteredProjects = this.projects.filter((project) => project.title.toLowerCase().includes(input))
    }
  },
  getters: {
    allProjects: state => state.projects,
    filtProjects: state => state.filteredProjects,
  },
})
