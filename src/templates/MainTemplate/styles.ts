import { styled } from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  height: 100vh;

  ${Media.MD} {
    padding: 0 15px;
  }
`;

export { StyledMainTemplate };
