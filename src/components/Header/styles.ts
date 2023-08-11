import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0 10px 0;
`;
const Links = styled.nav`
  display: flex;
  column-gap: 10px;
`;

export { StyledHeader, Links };
