import { styled } from "styled-components";
import { Color, Media } from "ui";

const StyledSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${Color.DARK_THEME};

  ${Media.XL} {
    font-size: 24px;
  }
`;

export { StyledSubtitle };
