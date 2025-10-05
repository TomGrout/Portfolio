// app/projects/[slug]/page.tsx
import ProjectPage from 'app/components/projectPage';
import projectsData from 'app/projects/projectsData';
import { notFound } from 'next/navigation';

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const module =
    projectsData.flatMap((y) => y.items).find((m) => m.slug === params.slug);

  if (!module) return notFound();

  return (
    <ProjectPage
      title={module.name}
      tags={module.tags ?? []}
      description={module.description ?? ''}
      //keyProjects={module.keyProjects ?? []}
      //learningOutcomes={module.learningOutcomes ?? []}
      //images={module.images ?? []}
    />
  );
}
