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
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  buildModules: [
    '@nuxt/postcss8',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
            additionalData: '@import "~/assets/styles/main.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: "Benjamin Liet - Portfolio",
    }
  }
});
