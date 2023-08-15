import { StyledLink } from "./styles";

interface IProps {
  label: string;
  link: string;
  className?: string;
}

export const Link = ({ label, link, className }: IProps) => {
  return (
    <StyledLink className={className} href={link}>
      {label}
    </StyledLink>
  );
};
