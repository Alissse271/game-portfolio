import { IProject } from "types";
import { StyledProjectList } from "./styles";
import { ProjectItem } from "components";

interface IProps {
  projects: IProject[];
}

export const ProjectList = ({ projects }: IProps) => {
  return (
    <StyledProjectList>
      {projects.map((project) => {
        return <ProjectItem project={project} key={project.title} />;
      })}
    </StyledProjectList>
  );
};
