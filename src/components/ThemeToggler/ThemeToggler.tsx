import { useEffect } from "react";
import { getTheme, useAppDispatch, useAppSelector } from "store";
import { toggleTheme } from "store/features/theme/themeSlice";
import { Toggler } from "./styles";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <Toggler onClick={handleChangeTheme}>{theme === "light" ? "🌙" : "☀️"}</Toggler>;
};
