import SectionHeader from '../../common/SectionHeader';
import ProjectGallery from './ProjectGallery';

const FolderCodeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M10 10.5 8 13l2 2.5" />
    <path d="m14 10.5 2 2.5-2 2.5" />
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

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
        icon={<FolderCodeIcon />}
        intro="Une sélection de projets pédagogiques : des besoins réalistes, des choix techniques expliqués et du code à explorer."
      />
      <ProjectGallery />
    </section>
  );
}
