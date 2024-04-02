export default defineEventHandler((event) => {
  return {
    results: 'projects',
    projects: {
      1: {
        id: 1,
        title: "Eligia",
        url: "https://eligia-fa7ef5f340ed.herokuapp.com/",
        categories: [
          "Backend",
          "Frontend",
          "UX",
          "UI"
        ],
        languages: [
          "Ruby",
          "Rails",
          "JavaScript",
          "Stimulus",
          "HTML",
          "SCSS"
        ],
        img: "eligia_screen.webp",
        createdAt: {
          month: 10,
          year: 2022
        },
        details: {
          client: "ELIGIA SARL",
          objective: "The goal was to build a website from scratch including a classic landing page with company informations, a customer account with personnal dashboard and an order creating flow. The challenge was to have a nice UX to allow a senior user (persona) to use the platform",
          text: [
            "Eligia is a website developped to help mourning people to unsubscribe the deceased accounts. In France, the administrative steps after someone's death are often blurred and hard. Then, it's not the kind of stuff we want to do in this complicated time.",
            "The website eligia.fr offers people to make these differents steps (notify public administrations, unsubscribe to the different accounts etc ...) for them. All they have to do is start a process and follow the different steps",
            "The first step is to make a list of companies to notify. The goal here was to make the better UX possible. The user has to understand directly how to add companies to the list and how to remove them. Moreover, they must find what they want, fast and easy. The different tests we made showed that this was not an easy part because each people way of behave is different.",
            "The second step consists in adding documents to make these notifications. Here, the hard part was to upload directly documents to the cloud (Google Cloud Platform) and modify them easily. We still must have a good UX too to avoid the user frustration.",
            "The final step is the order check and the paiement. Here, I had to find and integrate an external platform paiement, eased by the good documentation of the suppliers (Stripe, Mollie or Payplug). We finally chose Payplug.",
            "Finally, the goal of eligia was for a user to follow the process after the paiement. To this end, I developped a personnal dashboard with all the informations and the different steps for each companies. Moreover, the customer can add desired documents after the order is paid.",
            "The platform has been fullstack developped with Ruby on Rails with 5 versions after 4 user tests for a 5 months total duration."
          ]
        }
      },
      2: {
        id: 2,
        title: "CLIET Tableaux",
        url: "https://www.cliet-tableaux.com/",
        categories: [
          "Backend",
          "Frontend",
          "UI"
        ],
        languages: [
          "Ruby",
          "Rails",
          "JavaScript",
          "Stimulus",
          "HTML",
          "SCSS"
        ],
        img: "cliet_screen.webp",
        createdAt: {
          month: 6,
          year: 2022
        },
        details: {
          client: "CLIET painter",
          objective: "The client wanted to show its painting, and maybe sell some of them. So this website, entirely build by myself, is a marketplace for paintings.",
          text: [
            "CLIET is a french painter with a lot of paintings, so a lot to show to the world. Then, this marketplace website has a simple rule, be functionnal and be pretty to honor the paintings.",
            "With a simple grid and a nice graphical charter, we can first improve the website UI. The site is fully responsive too to allow visitors to go directly to the website throug Instagram (app where the artist was previously).",
            "The marketplace has few features too: a contact form, a form to propose custom paintings to the artist, and an ordering flow. For the latter, I used Stripe and its API.",
            "The development took 2 months in total, with one batch of testing, made entirely with Rails."
          ]
        }
      },
      3: {
        id: 3,
        title: "Stud•YOU",
        url: "https://studyou.netlify.app/",
        categories: [
          "Frontend",
          "UI"
        ],
        languages: [
          "JavaScript",
          "Vue",
          "HTML",
          "CSS"
        ],
        img: "studyou_screen.webp",
        createdAt: {
          month: 0,
          year: 2023
        },
        details: {
          client: "Myself",
          objective: "The goal was to train myself with the Vue.js 3 framework. To this end I used a free API (TMDB) and a classical watchlist approach.",
          text: [
            "I made Stud•YOU after a desire from myself: have a place to reference all movies, in theaters or not, and save them to my own watchlist.",
            "I used the free TMDB API with its different endpoints to develop the site and its different categories. As a movie buff, I was thrilled to see all the movies taking place on my website and with my design.",
            "For this project, there is no paiement or order, just a user connection made with firebase, and the difficulty was to display movies from API and save them to my own firebase realtime DB",
            "The app skeleton have been fully developped, but it still have some features that I would want to make. For example a friend follow system to have movie ideas, or a link to the different available streaming platforms.",
          ]
        }
      },
      4: {
        id: 4,
        title: "Benjamin Liet Dev",
        url: "https://www.benjamin-liet.online/",
        categories: [
          "Frontend",
        ],
        languages: [
          "JavaScript",
          "Vue",
          "Nuxt",
          "HTML",
          "SCSS"
        ],
        img: "portfolio_screen.webp",
        createdAt: {
          month: 1,
          year: 2023
        },
        details: {
          client: "Myself",
          objective: "This actual website, my portfolio, was designed to show all my projects, but to learn Nuxt3 too.",
          text: [
            "With that portfolio, I wanted to have a place to show what I can do. My github repositories were doing the same thing, but here, you can have a visual too.",
            "The website is still in development, because there is always something to do and to improve ..."
          ]
        }
      },
      5: {
        id: 5,
        title: "Essenceo",
        url: "https://superlative-meringue-01a725.netlify.app/",
        categories: [
          "Frontend",
        ],
        languages: [
          "JavaScript",
          "Angular",
          "HTML",
          "SCSS"
        ],
        img: "essenceo_screen.webp",
        createdAt: {
          month: 2,
          year: 2024
        },
        details: {
          client: "Myself",
          objective: "The goal was to learn Angular by using a free API",
          text: [
            "With that website, I wanted to join useful and learning : by learning Angular, I learned the gasoline price too",
            "For this little project, that I have not finished yet, we just can enter an adress and see the stations spots with wanted price"
          ]
        }
      },
    }
  }
})
