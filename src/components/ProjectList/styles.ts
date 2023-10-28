import { styled } from "styled-components";
import { Color, Media } from "ui";

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  scroll-margin-top: 68px;
`;

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 1140px;
  width: 100%;
  height: 792px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${Color.GREY_THEME};
  border: 2px solid ${Color.DARK_THEME};
  border-radius: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ${Media.SM} {
    height: 522px;
  }
  ${Media.LG} {
    height: 430px;
  }
`;

export { Projects, StyledProjectList };
