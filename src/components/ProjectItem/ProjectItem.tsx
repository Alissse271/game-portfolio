import { IProject } from "types";
import {
  StyledProjectItem,
  Image,
  Title,
  DateAdded,
  Name,
  Description,
  Info,
  StyledLink,
} from "./styles";

interface IProps {
  project: IProject;
}

export const ProjectItem = ({ project: { image, title, dateAdded, link } }: IProps) => {
  return (
    <StyledProjectItem>
      <Info>
        <Image src={image} alt="project image" />
        <Title>{title}</Title>
        <DateAdded>
          <Name>Date Added</Name>
          <Description>{dateAdded}</Description>
        </DateAdded>
      </Info>
      <StyledLink label="Download" link={link} />
    </StyledProjectItem>
  );
};
