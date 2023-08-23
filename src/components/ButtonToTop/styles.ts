import { styled } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { Color } from "ui";

const StyledButton = styled(Link)`
  position: fixed;
  bottom: 15px;
  right: 20px;
  width: 32px;
  height: 32px;
  border: 2px solid ${Color.BLUE};
  border-radius: 50%;
  background-color: ${Color.WHITE_THEME};

  svg {
    path {
      fill: ${Color.BLUE};
    }
  }
`;

export { StyledButton };
