import { ProjectList, ThemeToggler } from "components";
import { styled } from "styled-components";

const projects = [
  {
    title: "1 GTA5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tags: ["game", "youtube", "Unity"],
  },
  {
    title: "2 Lighting Math Explorer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culp?",
    tags: ["youtube", "WebGL"],
  },
  {
    title: "3 The Reaper's Dog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab",
    tags: ["game", "Unity"],
  },
  {
    title: "4 The Reaper's Dog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab",
    tags: ["game", "Unity"],
  },
  {
    title: "5 Gobble Grubs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum",
    tags: ["game", "WebGL", "Unity"],
  },
  {
    title: "6 Lighting Math Explorer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    tags: ["youtube", "WebGL"],
  },
  {
    title: "7 #1GAM Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit.",
    tags: ["game", "youtube", "Unity"],
  },
  {
    title: "8 Stellar Labyrinth",
    description: "Lorem ipsum dolor sit amet",
    tags: ["game", "youtube", "WebGL"],
  },
];

export const App = () => {
  return (
    <StyledApp>
      <ThemeToggler />
      <ProjectList projects={projects} />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 1140px;
  row-gap: 20px;
`;
