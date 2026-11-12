import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../data/projectsData";

export default function ProjectGallery({ projects = projectsData }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
