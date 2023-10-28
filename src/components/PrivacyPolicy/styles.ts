import { styled } from "styled-components";
import { Subtitle } from "components";
import { Color, Media } from "ui";

const StyledPrivacyPolicy = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  ${Media.XL} {
  }
`;

const Info = styled.p`
  color: ${Color.DARK_THEME};
  font-size: 14px;
  ${Media.LG} {
    font-size: 16px;
  }
`;
const Title = styled(Subtitle)`
  padding: 10px 0;
`;
const List = styled.ol`
  padding: 10px 0 10px 40px;
  font-size: 14px;
  color: ${Color.DARK_THEME};
  ${Media.LG} {
    font-size: 16px;
  }
`;
const ListItem = styled.li`
  letter-spacing: 1px;
`;

export { StyledPrivacyPolicy, Info, List, ListItem, Title };
