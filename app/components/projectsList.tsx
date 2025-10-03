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
  "C++": "border-yellow-400 text-yellow-400",
  "Python": "border-red-400 text-red-400",
  "C#": "border-red-400 text-red-400",
  "JavaScript": "border-red-400 text-red-400",
  "TypeScript": "border-red-400 text-red-400",
  "PHP": "border-red-400 text-red-400",
  "HTML": "border-red-400 text-red-400",
  "CSS Bootstrap": "border-red-400 text-red-400",
  "CSS Tailwind": "border-cyan-400 text-cyan-400",
  "React": "border-blue-400 text-blue-400",
  "Next.js": "border-gray-300 text-gray-300",
  "Vue.js": "border-green-400 text-green-400",
  "Three.js": "border-blue-600 text-blue-600",
  "Vite": "border-purple-400 text-purple-400",
};

export default function ProjectsList({ sections, fullWidth = false }: { sections: Section[]; fullWidth?: boolean }) {
  return (
    <div className="flex flex-col gap-9">
      {sections.map((section) => (
        <div key={section.name} className="flex flex-col gap-3">
          <div className="font-mono text-xs font-semibold tracking-wider text-gray-700 uppercase">
            {section.name}
          </div>

          <div className={`grid gap-5 ${fullWidth ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"}`}>            {section.items.map((item) => (
            <Link
            key={item.name}
            href={`/${item.slug}`}
            className={`group flex flex-col gap-2 rounded-lg px-5 py-3 hover:opacity-90 ${item.color || "bg-gray-900"}`}
            >
            <div className="flex items-start gap-4">
                {/* Left side: text */}
                <div className="flex-1">
                <div className="flex items-center justify-between font-medium text-gray-200 group-hover:text-gray-50">
                    {item.name} <LinkStatus />
                </div>

                {item.description && (
                    <div className="mt-1 line-clamp-3 text-[13px] text-gray-400 group-hover:text-gray-300">
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
                    className={`px-2 py-[1px] text-xs rounded-md border ${tagColors[tag] || "border-gray-500 text-gray-400"}`}
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
