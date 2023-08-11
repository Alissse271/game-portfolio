import { ROUTE } from "router";
import { Links, StyledHeader } from "./styles";
import { ThemeToggler, CustomNavLink } from "components";

export const Header = () => {
  return (
    <StyledHeader>
      <Links>
        <CustomNavLink to={ROUTE.HOME}>BLOG</CustomNavLink>
        <CustomNavLink to={ROUTE.PROJECTS}>PROJECTS</CustomNavLink>
        <CustomNavLink to={ROUTE.ABOUT}>ABOUT</CustomNavLink>
      </Links>
      <ThemeToggler />
    </StyledHeader>
  );
};
