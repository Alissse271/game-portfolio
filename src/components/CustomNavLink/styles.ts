import { NavLink, PathMatch } from "react-router-dom";
import { styled } from "styled-components";
import { Color } from "ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? `${Color.DARK_THEME}` : `${Color.GRAY}`)};
  font-size: 18px;
  font-weight: 700;

  background: linear-gradient(to right, #fff0, #fff0),
    linear-gradient(to right, ${Color.BLUE}, ${Color.BLUE});

  background-size: ${({ $isActive }) =>
    $isActive ? "0 0.1em, 100% 0.1em" : "100% 0.1em, 0 0.1em"};
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover,
  &:focus {
    background-size: 0 0.1em, 100% 0.1em;
  }
`;

export { StyledNavLink };
