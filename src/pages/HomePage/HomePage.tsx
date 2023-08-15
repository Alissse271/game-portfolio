import { BlogList } from "components";
import { StyledHomePage } from "./styles";

const blogs = [
  {
    title: "1 GTA5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tags: ["game", "youtube", "Unity"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "2 Lighting Math Explorer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culp?",
    tags: ["youtube", "WebGL"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "3 The Reaper's Dog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab",
    tags: ["game", "Unity"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "4 The Reaper's Dog",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eligendi non quis exercitation",
    tags: ["game", "Unity"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "5 Gobble Grubs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum",
    tags: ["game", "WebGL", "Unity"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "6 Lighting Math Explorer",
    description:
      "Lorem ipsum dolor sit ametnesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    tags: ["youtube", "WebGL"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "7 #1GAM Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit.",
    tags: ["game", "youtube", "Unity"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
  {
    title: "8 Stellar Labyrinth",
    description: "Lorem ipsum dolor sit amet",
    tags: ["game", "youtube", "WebGL"],
    image:
      "https://templatemo.com/templates/templatemo_579_cyborg_gaming/assets/images/popular-03.jpg",
  },
];

const cont = [
  {
    title: "8 Stellar Labyrinth",
    description: "Lorem ipsum dolor sit amet",
    tags: ["game", "youtube", "WebGL"],
  },
];

export const HomePage = () => {
  return (
    <StyledHomePage>
      <BlogList blogs={blogs} />
    </StyledHomePage>
  );
};
