import ProjectCard from './ProjectCard';
import { projectsData } from '../../../data/projectsData';

export default function ProjectGallery() {
    return (
        <section id="projets" className="project-gallery-section">
            <h2>Mes Projets</h2>

            <div className="gallery-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}