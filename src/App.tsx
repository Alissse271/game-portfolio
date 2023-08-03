import { useEffect } from "react";
import { useAppSelector, getTheme } from "store";

export const App = () => {
  const { theme } = useAppSelector(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <div>App</div>;
};
