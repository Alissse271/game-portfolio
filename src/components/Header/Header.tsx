import { ROUTE } from "router";
import { Links, StyledHeader, StyledLink } from "./styles";
import { ThemeToggler } from "components";

interface IProps {
  className?: string;
}

export const Header = ({ className }: IProps) => {
  return (
    <StyledHeader className={className}>
      <Links>
        <StyledLink to={ROUTE.HASH_BLOGS} smooth>
          BLOG
        </StyledLink>
        <StyledLink to={ROUTE.HASH_PROJECTS} smooth>
          PROJECTS
        </StyledLink>
        <StyledLink to={ROUTE.HASH_ABOUT} smooth>
          ABOUT
        </StyledLink>
      </Links>
      <ThemeToggler />
    </StyledHeader>
  );
};
