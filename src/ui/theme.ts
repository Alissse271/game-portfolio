import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --white: #fff;
    --dark: #000;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --white: #000;
    --dark: #fff;
  }
`;

export const Theme = { lightTheme, darkTheme };
