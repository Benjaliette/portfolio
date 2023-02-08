export default defineNuxtConfig({
  alias: {
    "@": "/<rootDir>"
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: [
    '@nuxt/postcss8',
  ],
  css: ["~/assets/styles/main.scss"],
});
