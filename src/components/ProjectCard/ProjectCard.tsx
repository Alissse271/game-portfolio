import { project } from "assets";
import { Card, Image, Description, Title, Subtitle, BadgesList } from "./styles";
import { Badge } from "components/Badge/Badge";

export const ProjectCard = () => {
  const badges = ["qwer", "asdfg", "vlaaaaad"];
  return (
    <Card>
      <Image src={project} alt="project image" />
      <Description>
        <Title>Title</Title>
        <Subtitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, sunt!
        </Subtitle>
        <BadgesList>
          {badges.map((label) => {
            return <Badge label={label} key={label} />;
          })}
        </BadgesList>
      </Description>
    </Card>
  );
};
