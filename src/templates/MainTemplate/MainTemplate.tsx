import { Footer } from "components";
import { StyledMainTemplate } from "./styles";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Outlet />
      <Footer />
    </StyledMainTemplate>
  );
};
