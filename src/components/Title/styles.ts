import { styled } from "styled-components";
import { Color, Media } from "ui";

const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${Color.DARK_THEME};

  ${Media.XL} {
    font-size: 36px;
  }
`;

export { StyledTitle };
