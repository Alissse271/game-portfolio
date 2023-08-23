import { useState, useEffect } from "react";
import { StyledButton } from "./styles";
import { TopArrowIcon } from "assets";

export const ButtonToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showButton && (
        <StyledButton to="#top" smooth>
          <TopArrowIcon />
        </StyledButton>
      )}
    </>
  );
};
