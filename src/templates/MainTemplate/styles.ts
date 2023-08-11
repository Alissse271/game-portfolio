import { styled } from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  padding: 0 30px;

  ${Media.MD} {
    padding: 0 15px;
  }
`;

export { StyledMainTemplate };
