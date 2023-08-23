import { Header } from "components";
import { styled } from "styled-components";
import { Color, Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  height: fit-content;

  ${Media.MD} {
    padding: 0 15px;
  }
`;

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  padding: 30px 30px 10px 30px;
  background-color: ${Color.WHITE_THEME};

  ${Media.MD} {
    padding: 30px 15px 10px 15px;
  }
`;

export { StyledMainTemplate, StyledHeader };
