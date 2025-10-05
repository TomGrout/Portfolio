import { notFound } from "next/navigation";
import ProjectPage from "../../components/projectPage";
import modulesData from "../modulesData";

const allModules = modulesData.flatMap((year) => year.items);

export default function ModuleDetails({
  params,
}: {
  params: { slug: string };
}) {
  const module = allModules.find((m) => m.slug === params.slug);

  if (!module) return notFound();

  return (
    <ProjectPage
      title={module.name}
    //   tags={module.descriptors ?? []}
    //   description={module.description ?? ""}
    //   keyProjects={module.keyProjects ?? []}
    //   learningOutcomes={module.learningOutcomes ?? []}
    //   images={module.images ?? []}
    />
  );
}

export function generateStaticParams() {
  return allModules.map((m) => ({ slug: m.slug }));
}
