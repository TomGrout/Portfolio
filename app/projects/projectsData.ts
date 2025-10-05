const projectsData = [
  {
    name: "University Projects",
    items: [
      { name: "Home Device Manager", slug: "home-device-mgr", description: "Console based home Smart Device manager in C++.", 
        color: "bg-gray-200 dark:bg-cyan-900",
        tags: ["C++", "Git"]
       },
      { name: "Asset Manager", slug: "asset-manager", description: "Worked with Autodesk to implement a 3D asset management system.", 
        color: "bg-gray-200 dark:bg-gray-900",
        tags: ["C#", "Python", "MongoDB", "Git"]
        },
    ],
  },
  {
    name: "Personal Projects",
    items: [
      { name: "Portfolio Site", slug: "portfolio", description: "Personal site built with Next.js.", 
        color: "bg-gray-200 dark:bg-gray-800",
        tags: ["Next.js", "React", "Tailwind", "Git"]
       },
      { name: "Company website, GBP", slug: "gbp-site", description: "Vue.js + vite company website, with powerful three.js features.",
        color: "bg-gray-200 dark:bg-sky-800",
        tags: ["Vue.js", "Three.js", "Vite", "Git"]
       },
    ],
  },
];

export default projectsData;  