import Link from "next/link";
// Update the import path to the correct location of LinkStatus
import { LinkStatus } from "../../ui/link-status";

type Item = {
  name: string;
  slug: string;
  description?: string;
  color?: string;
  image?: string;
  tags?: string[]; 
};

type Section = {
  name: string;
  items: Item[];
};

const tagColors: Record<string, string> = {
  // Programming languages
  "C++": "border-pink-500 text-pink-500",           // #f34b7d → closest to pink-500
  "C#": "border-violet-500 text-violet-500",          // #178600 → closest to green-700
  "Python": "border-blue-600 text-blue-600",        // #3572A5 → closest to blue-600
  "CMake": "border-red-600 text-red-600",           // #DA3434 → closest to red-600
  "JavaScript": "border-yellow-400 text-yellow-400",// #f1e05a → matches yellow-400
  "HTML": "border-orange-600 text-orange-600",      // #e34c26 → closest to orange-600
  "CSS": "border-purple-700 text-purple-700",       // #663399 → closest to purple-700
  "Clojure": "border-rose-500 text-rose-500",       // #db5855 → close to rose-500
  "TypeScript": "border-blue-500 text-blue-500",    // #3178c6 → close to blue-500
  "Vue": "border-green-500 text-green-500",         // #41b883 → green-500
  "PHP": "border-indigo-700 text-indigo-700",       // #4F5D95 → closest to indigo-700

  // Frameworks / extras 
  "Bootstrap": "border-purple-400 text-purple-400", 
  "Tailwind": "border-cyan-400 text-cyan-400", 
  "React": "border-sky-400 text-sky-400",         // React brand blue
  "Next.js": "border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300",     // Neutral for Next.js
  "Vue.js": "border-emerald-500 text-emerald-500", // Variant of Vue green
  "Three.js": "border-blue-400 text-blue-400",    // Dark blue
  "Vite": "border-yellow-500 text-yellow-500",    // Purple/violet brand

  // DB & tools
  "MongoDB": "border-green-600 text-green-600",   // MongoDB green
  "Git": "border-orange-500 text-orange-500",           // Git orange
  "GitHub": "border-gray-700 text-gray-700",      // Neutral for GitHub
  "Docker": "border-blue-700 text-blue-700",      // Docker blue
  "Linux": "border-orange-500 text-orange-500",   // Linux orange

};

export default function SectionList({ sections, fullWidth = false }: { sections: Section[]; fullWidth?: boolean }) {
  return (
    <div className="flex flex-col gap-9">
      {sections.map((section) => (
        <div key={section.name} className="flex flex-col gap-3">
          <div className="font-mono text-xs font-semibold tracking-wider text-gray-950 dark:text-gray-300 uppercase">
            {section.name}
          </div>

          <div className={`grid gap-5 ${fullWidth ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>            {section.items.map((item) => (
            <Link
              key={item.name}
              href={`/${item.slug}`}
              className={`group flex flex-col gap-2 rounded-lg px-5 py-3 hover:opacity-80 ${item.color}`}
            >
              <div className="flex items-start gap-4">
                {/* Left side: text */}
                <div className="flex-1">
                  <div className="flex items-center justify-between font-medium  text-gray-950 dark:text-gray-200 group-hover:text-gray-50">
                    {item.name} <LinkStatus />
                  </div>

                  {item.description && (
                    <div className="mt-1 line-clamp-3 text-[13px]  text-gray-900 dark:text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </div>
                  )}
                </div>

                {/* Right side: image */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border border-gray-700"
                  />
                )}
              </div>

              {/* Tags row */}
              {item.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-[1px] text-xs rounded-md border ${tagColors[tag] || "border-gray-500 text-gray-400"} bg-black/10 dark:bg-black/30`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
