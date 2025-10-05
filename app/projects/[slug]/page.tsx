import { notFound } from "next/navigation";
import ProjectPage from "app/components/projectPage";
import projectsData from "app/projects/projectsData";

const allProjects = projectsData.flatMap((group) => group.items);

export default async function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <ProjectPage
      title={project.name}
      tags={project.tags ?? []}
      description={project.description ?? ""}
    //   keyProjects={project.keyProjects ?? []}
    //   learningOutcomes={project.learningOutcomes ?? []}
    //   images={project.images ?? []}
    />
  );
}

// Optional static generation
export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}
