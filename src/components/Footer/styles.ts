import { styled } from "styled-components";
import { Color } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  padding: 20px;
  border-top: 1px solid ${Color.GRAY};
`;

const Link = styled.a`
  svg {
    &:hover {
      path {
        fill: ${Color.BLUE};
      }
    }
  }
`;
const YoutubeLink = styled.a`
  svg {
    &:hover {
      path {
        stroke: ${Color.BLUE};
      }
    }
  }
`;

export { StyledFooter, Link, YoutubeLink };
