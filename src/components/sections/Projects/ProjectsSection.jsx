import { TbFolderCode } from 'react-icons/tb';
import SectionHeader from '../../common/SectionHeader';
import ProjectGallery from './ProjectGallery';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-10 border-t border-line px-6 py-16 md:px-10 lg:px-22 lg:py-24"
    >
      <SectionHeader
        number="03"
        label="Projets"
        title="De la pratique au concret."
        icon={<TbFolderCode className="size-5" />}
        intro="Une sélection de projets pédagogiques : des besoins réalistes, des choix techniques expliqués et du code à explorer."
      />
      <ProjectGallery />
    </section>
  );
}
