import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, getTheme } from "store";
import { Footer, Header } from "components";
import { StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <StyledMainTemplate>
      <Header />
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};
