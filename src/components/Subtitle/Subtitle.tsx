import { StyledSubtitle } from "./styles";

interface IProps {
  label: string;
  className?: string;
}

export const Subtitle = ({ label, className }: IProps) => {
  return <StyledSubtitle className={className}>{label}</StyledSubtitle>;
};
