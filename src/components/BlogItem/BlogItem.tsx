import { Card, Image, Description, Title, Subtitle, BadgesList } from "./styles";
import { Badge } from "components";
import { IBlog } from "types";

interface IProps {
  blog: IBlog;
}

export const BlogItem = ({ blog: { image, title, description, tags } }: IProps) => {
  return (
    <Card>
      <Image src={image} alt="blog image" />
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
