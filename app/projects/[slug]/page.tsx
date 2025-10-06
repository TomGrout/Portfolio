import { notFound } from "next/navigation";
import ProjectPage from "../../components/projectPage";
import projectsData from "../projectsData";

const allProjects = projectsData.flatMap(group => group.items);

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;               

  const project = allProjects.find(p => p.slug === slug);

  if (!project) return notFound();

  return (
    <ProjectPage
      title={project.name}
      tags={project.tags ?? []}
      description={project.description ?? ""}
      // keyProjects={project.keyProjects ?? []}
      // learningOutcomes={project.learningOutcomes ?? []}
      images={project.images ?? []}
    />
  );
}

export function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }));
}
