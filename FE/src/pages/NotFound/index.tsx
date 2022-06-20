import { NavLink } from "react-router-dom";

import * as S from "@/pages/NotFound/style";

const NotFoundPage = () => {
  return (
    <>
      <S.NotFoundContainer>
        <span>Not Found!</span>
        <S.HomeButton>
          <NavLink to="/">Go Home</NavLink>
        </S.HomeButton>
      </S.NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
