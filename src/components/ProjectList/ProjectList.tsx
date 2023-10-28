import { IProject } from "types";
import { Projects, StyledProjectList } from "./styles";
import { ProjectItem, Title } from "components";

interface IProps {
  projects: IProject[];
}

export const ProjectList = ({ projects }: IProps) => {
  return (
    <Projects id="projects">
      <Title label="Projects" />
      <StyledProjectList>
        {projects.map((project) => {
          return <ProjectItem project={project} key={project.title} />;
        })}
      </StyledProjectList>
    </Projects>
  );
};
