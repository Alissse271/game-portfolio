import { ProjectCard, ThemeToggler } from "components";
import { styled } from "styled-components";

export const App = () => {
  return (
    <StyledApp>
      <ThemeToggler />
      <ProjectCard />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  row-gap: 20px;
`;
