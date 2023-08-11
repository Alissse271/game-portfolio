import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";
import { StyledNavLink } from "./styles";

interface IProps {
  children: ReactNode;
  to: ROUTE;
  className?: string;
}

export const CustomNavLink = ({ children, to, className }: IProps) => {
  const match = useMatch(to);
  return (
    <StyledNavLink $isActive={match} to={to} className={className}>
      {children}
    </StyledNavLink>
  );
};
