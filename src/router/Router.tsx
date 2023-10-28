import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ROUTE } from "./routes";
import { MainTemplate } from "templates";
import { HomePage, NotFoundPage, PrivacyPage } from "pages";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.PRIVACY_POLICY} element={<PrivacyPage />} />
      </Route>
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </>,
  ),
  // { basename: "/game-portfolio" },
);
