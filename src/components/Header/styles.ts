import { styled } from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { Color } from "ui";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`;

const Links = styled.nav`
  display: flex;
  column-gap: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  color: ${Color.GRAY};

  background: linear-gradient(to right, #fff0, #fff0),
    linear-gradient(to right, ${Color.BLUE}, ${Color.BLUE});
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover,
  &:focus {
    background-size: 0 0.1em, 100% 0.1em;
  }
`;

export { StyledHeader, Links, StyledLink };
