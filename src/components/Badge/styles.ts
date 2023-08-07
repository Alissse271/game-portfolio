import { styled } from "styled-components";
import { Color } from "ui";

const StyledBadge = styled.div`
  display: inline-block;
  padding: 3px 7px;
  text-align: center;
  font-weight: 500;
  color: ${Color.BLUE};
  border: 1px solid ${Color.BLUE};
  border-radius: 14px;
`;

export { StyledBadge };
