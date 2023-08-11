import { styled } from "styled-components";
import { Media } from "ui";

const StyledBlogList = styled.ul`
  ${Media.MD} {
    column-count: 2;
    column-gap: 20px;
  }

  ${Media.XL} {
    column-count: 3;
    column-gap: 20px;
  }
`;

export { StyledBlogList };
