import Link from "next/link";
// Update the import path to the correct location of LinkStatus
import { LinkStatus } from "../../ui/link-status";
import { tagColours } from "@/ui/colourMap";

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

export default function SectionList({ sections, fullWidth = false, basePath = "" }: { sections: Section[]; fullWidth?: boolean; basePath?: string }) {
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
              href={`${basePath}/${item.slug}`}
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
                      className={`px-2 py-[1px] text-xs rounded-md border ${tagColours[tag] || "border-gray-500 text-gray-400"} bg-black/10 dark:bg-black/30`}
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
