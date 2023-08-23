import { StyledTitle } from "./styles";

interface IProps {
  label: string;
  id: string;
  className?: string;
}

export const Title = ({ id, label, className }: IProps) => {
  return (
    <StyledTitle id={id} className={className}>
      {label}
    </StyledTitle>
  );
};
