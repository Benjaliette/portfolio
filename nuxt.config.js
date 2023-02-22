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
  modules: [
    ['nuxt-mail', {
      message: {
        to: 'benjamin.liet.dev@gmail.com',
      },
      smtp: {
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
          user: "api",
          pass: process.env.API_MAIL_PASSWORD
        }
      },
    }],
    '@pinia/nuxt',
  ],
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
    },
    body: {
      h1: "TEST",
    }
  },
});
