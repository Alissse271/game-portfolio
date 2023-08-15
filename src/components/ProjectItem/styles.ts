import { styled } from "styled-components";
import { Color, Media } from "ui";
import { Link } from "components";

const StyledProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0 0 10px 0;

  border-bottom: 1px solid ${Color.GRAY};

  ${Media.LG} {
    flex-direction: row;
    column-gap: 10px;
    justify-content: space-between;
    padding: 20px;
  }
`;

const Info = styled.div`
  display: grid;
  grid-row-gap: 10px;

  ${Media.SM} {
    grid-template-columns: 80px auto;
    grid-column-gap: 10px;
  }

  ${Media.XL} {
    grid-template-columns: 80px 200px 100px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 80px;
  border-radius: 23px;
  overflow: hidden;

  ${Media.SM} {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  ${Media.XL} {
    grid-row-end: 2;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${Color.DARK_THEME};
`;

const DateAdded = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: ${Color.DARK_THEME};
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${Color.GRAY};
`;

const StyledLink = styled(Link)`
  width: min-content;
`;

export { StyledProjectItem, Info, Image, Title, DateAdded, Name, Description, StyledLink };
