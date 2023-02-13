export default defineEventHandler((event) => {
  return {
    results: 'projects',
    projectList: [
      {
        id: 1,
        title: "Eligia",
        category: "My company",
        language: "ruby",
        img: "eligia_screen.webp",
      },
      {
        id: 2,
        title: "CLIET Tableaux",
        category: "Marketplace website",
        language: "ruby",
        img: "cliet_screen.webp",
      },
      {
        id: 3,
        title: "Stud•YOU",
        category: "Vue learning project",
        language: "js",
        img: "studyou_screen.webp",
      },
      {
        id: 4,
        title: "Benjamin Liet Dev",
        category: "Portfolio website",
        language: "js",
        img: "portfolio_screen.webp",
      },
    ]
  }
})
