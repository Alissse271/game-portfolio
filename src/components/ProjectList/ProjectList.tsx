import { IProject } from "types";
import { StyledProjectList } from "./styles";
import { ProjectCard } from "components";

interface IProps {
  projects: IProject[];
}

export const ProjectList = ({ projects }: IProps) => {
  return (
    <StyledProjectList>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.title} />;
      })}
    </StyledProjectList>
  );
};
