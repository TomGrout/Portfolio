import { tagColours } from '../ui/colourMap';

export default function ProjectPage({
  title,
  tags = [],
  description,
  keyProjects = [],
  learningOutcomes = [],
  images = [],
}: {
  title: string;
  tags?: string[];
  description?: string;
  keyProjects?: string[];
  learningOutcomes?: string[];
  images?: string[];
}) {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Title and tags */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-sm font-medium border rounded-full px-2 py-0.5 ${tagColours[tag] || 'border-gray-400 text-gray-400'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Description */}
      {description && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </section>
      )}

      {/* Key Projects */}
      {keyProjects.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Project(s)</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {keyProjects.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </section>
      )}

      {/* Learning Outcomes */}
      {learningOutcomes.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Learning Outcomes</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {learningOutcomes.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </section>
      )}

      {/* Image carousel (to come later) */}
      {images.length > 0 && (
        <section>
          {/* placeholder until we build it */}
          <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            Image carousel coming soon
          </div>
        </section>
      )}
    </div>
  );
}
