import { project } from "assets";
import { Card, Image, Description, Title, Subtitle, BadgesList } from "./styles";
import { Badge } from "components";
import { IProject } from "types";

interface IProps {
  project: IProject;
}

export const ProjectCard = ({ project: { title, description, tags } }: IProps) => {
  return (
    <Card>
      <Image src={project} alt="project image" />
      <Description>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
        <BadgesList>
          {tags.map((tag) => {
            return <Badge label={tag} key={tag} />;
          })}
        </BadgesList>
      </Description>
    </Card>
  );
};
