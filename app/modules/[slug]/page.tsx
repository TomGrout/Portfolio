import { notFound } from "next/navigation";
import ProjectPage from "../../components/projectPage";
import modulesData from "../modulesData";

const allModules = modulesData.flatMap(group => group.items);

export default async function ModuleDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;              

  const module = allModules.find(m => m.slug === slug);
  console.log('slug:', slug, 'items:', allModules.length);


  if (!module) return notFound();
  return (
    <ProjectPage
      title={module.name}
      description={module.description ?? ""}
      // keyProjects={module.keyProjects ?? []}
      // learningOutcomes={module.learningOutcomes ?? []}
      images={module.images ?? []}
    />
  );
}

export function generateStaticParams() {
  console.log("GENERATING MODULE PATHS");
  return allModules.map(m => ({ slug: m.slug }));
}
