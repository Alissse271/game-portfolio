import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --white: #fff;
    --dark: #1f2122;
    --grey: #f5f5f5;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --white: #000;
    --dark: #fff;
    --grey: #27292a;
  }
`;

export const Theme = { lightTheme, darkTheme };
