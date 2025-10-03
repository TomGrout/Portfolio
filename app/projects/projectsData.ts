const projectsData = [
  {
    name: "University Projects",
    items: [
      { name: "Home Device Manager", slug: "home-device-mgr", description: "Console based home Smart Device manager in C++.", color: "bg-cyan-900" },
      { name: "Asset Manager", slug: "asset-manager", description: "Worked with Autodesk to implement a 3D asset management system.", color: "bg-emerald-600"  },
    ],
  },
  {
    name: "Personal Projects",
    items: [
      { name: "Portfolio Site", slug: "portfolio", description: "Personal site built with Next.js.", color: "bg-pink-900",
          tags: ["Next.js", "React", "Tailwind"]
       },
      { name: "Company website, GBP", slug: "gbp-site", description: "Vue.js + vite company website, with powerful three.js features.", color: "bg-sky-500",
            tags: ["Vue.js", "Three.js", "Vite"]
       },
    ],
  },
];

export default projectsData;  