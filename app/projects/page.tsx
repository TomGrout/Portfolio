import ProjectsList from 'app/components/projectsList'
import projectsData from './projectsData';
import { Boundary } from '../../ui/boundary';

const allProjects = projectsData;


export default function ProjectsPage() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
        <p className="mb-4">Here are my university and personal projects.</p>
      </section>

      <Boundary
        label="Tom Grout"
        animateRerendering={false}
        kind="solid"
        className="flex flex-col gap-9"
      >
        <ProjectsList sections={projectsData} fullWidth/>
      </Boundary>
    </>
  );
}