import { styled } from "styled-components";
import { Media } from "ui";

const StyledProjectList = styled.ul`
  padding: 0 30px;

  ${Media.MD} {
    column-count: 2;
    column-gap: 20px;
    padding: 0 15px;
  }

  ${Media.XL} {
    column-count: 3;
    column-gap: 20px;
  }
`;

export { StyledProjectList };
