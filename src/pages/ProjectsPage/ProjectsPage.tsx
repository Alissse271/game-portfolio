import { ProjectList } from "components";
import { StyledProjectsPage } from "./styles";

const projects = [
  {
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg",
    title: "1 Stray",
    dateAdded: "24/10/2020",
    link: "https://www.google.by",
  },
  {
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg",
    title: "2 CS-GO: Lorem ipsum",
    dateAdded: "20/02/2015",
    link: "https://www.google.by",
  },
  {
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/game-03.jpg",
    title: "3 GTA6",
    dateAdded: "10/07/2013",
    link: "https://www.google.by",
  },
];

export const ProjectsPage = () => {
  return (
    <StyledProjectsPage>
      <ProjectList projects={projects} />
    </StyledProjectsPage>
  );
};
