import { StyledBadge } from "./styles";

interface IProps {
  label: string;
}

export const Badge = ({ label }: IProps) => {
  return <StyledBadge>{label}</StyledBadge>;
};
