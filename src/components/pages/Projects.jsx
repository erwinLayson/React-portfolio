import { Projects } from "../../data/projectData";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import ContentHeader from "../shared/ContentHeader";

// Components 
import ProjectCard from "../ProjectCard";

export function Project() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="flex flex-col p-5 rounded-lg gap-10">
      <ContentHeader
        label={'Projects'}
        prefersReducedMotion={prefersReducedMotion}
      />


      <div className="flex flex-col gap-8">
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}