import SectionList from 'app/components/sectionList'
import modulesData from './modulesData';
import { Boundary } from '../../ui/boundary';

export default function ModulesPage() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">University Modules</h1>
        <p className="mb-4">These are the modules I studied during my degree.</p>
      </section>

      <Boundary
        label="Tom Grout"
        animateRerendering={false}
        kind="solid"
        className="flex flex-col gap-9"
      >
        <SectionList sections={modulesData} />
      </Boundary>
    </>
  );
}
