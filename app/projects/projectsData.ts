const projectsData = [
  {
    name: "University Projects",
    items: [
      { name: "Home Device Manager", slug: "home-device-manager", description: "Console based home Smart Device manager in C++.", 
        color: "bg-gray-200 dark:bg-gray-800",
        tags: ["C++", "Git"],
        images: [
          { src: "/images/home-device-manager/menu.png", desc: "Main menu" },
          { src: "/images/home-device-manager/menucode.png", desc: "Menu function pointer" },
          { src: "/images/home-device-manager/adddevice.png", desc: "Add device" },
        ],
       },
      { name: "Asset Manager", slug: "asset-manager", description: "Worked with Autodesk to implement a 3D asset management system.", 
        color: "bg-gray-200 dark:bg-gray-800",
        tags: ["C#", "Python", "MongoDB", "Git"],
        images: [],
        },
    ],
  },
  {
    name: "Personal Projects",
    items: [
      { name: "Portfolio Site", slug: "portfolio", description: "Personal site built with Next.js.", 
        color: "bg-gray-200 dark:bg-gray-800",
        tags: ["Next.js", "React", "Tailwind", "Git"],
        images: [],
       },
      { name: "Company website, GBP", slug: "gbp-site", description: "Vue.js + vite company website, with powerful three.js features.",
        color: "bg-gray-200 dark:bg-gray-800",
        tags: ["Vue.js", "Three.js", "Vite", "Git"],
        images: [],
       },
    ],
  },
];

export default projectsData;  