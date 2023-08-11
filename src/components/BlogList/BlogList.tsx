import { IProject } from "types";
import { StyledBlogList } from "./styles";
import { BlogItem } from "components";

interface IProps {
  projects: IProject[];
}

export const BlogList = ({ projects }: IProps) => {
  return (
    <StyledBlogList>
      {projects.map((project) => {
        return <BlogItem project={project} key={project.title} />;
      })}
    </StyledBlogList>
  );
};
