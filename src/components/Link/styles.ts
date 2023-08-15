import { styled } from "styled-components";
import { Color } from "ui";

const StyledLink = styled.a`
  display: inline-block;
  height: min-content;
  padding: 12px 30px;

  color: ${Color.PINK};
  text-transform: capitalize;
  letter-spacing: 0.5px;

  background-color: transparent;
  border: 1px solid ${Color.PINK};
  border-radius: 25px;

  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    border-color: ${Color.WHITE};
    background-color: ${Color.WHITE};
    color: ${Color.PINK};
  }
`;

export { StyledLink };
