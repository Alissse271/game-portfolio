import { styled } from "styled-components";
import { Media } from "ui";

const Blogs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  scroll-margin-top: 68px;
`;

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

export { Blogs, StyledBlogList };
