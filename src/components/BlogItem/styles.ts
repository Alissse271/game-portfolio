import { styled } from "styled-components";
import { Color } from "ui";

const Card = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 23px;
  background-color: ${Color.GREY_THEME};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 23px 23px 0 0;
  overflow: hidden;
`;

const Description = styled.div`
  padding: 20px 15px;
  font-size: 16px;
  color: ${Color.DARK_THEME};
`;

const Title = styled.h3`
  /* margin-top: 14px; */
`;

const Subtitle = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

const BadgesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export { Card, Image, Description, Title, Subtitle, BadgesList };
