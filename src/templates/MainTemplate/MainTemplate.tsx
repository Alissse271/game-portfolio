import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, getTheme } from "store";
import { ButtonToTop, Footer } from "components";
import { StyledHeader, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <>
      <StyledHeader />
      <StyledMainTemplate>
        <Outlet />
        <Footer />
        <ButtonToTop />
      </StyledMainTemplate>
    </>
  );
};
