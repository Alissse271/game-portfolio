import { ROUTE } from "router";
import { Button, StyledNotFoundPage, Arrow } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Button to={ROUTE.HOME}>
        <Arrow />
        Back home
      </Button>
    </StyledNotFoundPage>
  );
};
