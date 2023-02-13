export default defineEventHandler((event) => {
  return {
    results: 'socials',
    socialList: [
      {
        id: 1,
        name: "github",
        url: "https://github.com/Benjaliette",
      },
      {
        id: 2,
        name: "linkedin",
        url: "https://www.linkedin.com/in/benjamin-liet-b1a58a5b/",
      },
      {
        id: 3,
        name: "malt",
        url: "https://www.malt.fr/profile/benjaminliet",
      },
    ]
  }
})
