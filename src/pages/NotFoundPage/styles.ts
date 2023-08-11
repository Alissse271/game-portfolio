import { Link } from "react-router-dom";
import { errorImage, LeftArrowIcon } from "assets";
import { styled } from "styled-components";
import { Color, Media } from "ui";

const StyledNotFoundPage = styled.div`
  display: flex;
  height: 100vh;
  background: center center no-repeat url(${errorImage});

  ${Media.LG} {
    background-size: 500px 500px;
  }

  ${Media.XXL} {
    background-size: 900px 900px;
  }
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 20px 0 0 20px;
  color: ${Color.BLUE};
  font-size: 20px;
  font-weight: 600;
`;

const Arrow = styled(LeftArrowIcon)`
  path {
    fill: ${Color.BLUE};
  }
`;

export { StyledNotFoundPage, Button, Arrow };
