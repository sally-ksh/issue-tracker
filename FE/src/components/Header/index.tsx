import { ReactComponent as Logo } from "@/assets/Logo.svg";
import { ReactComponent as UserIcon } from "@/assets/UserIcon.svg";
import * as S from "@/components/Header/style";
import { theme } from "@/styles/theme";

import Button from "../common/Button";

const Header = () => {
  return (
    <div>
      <S.HeaderContainer>
        <Button component={<Logo />} width="199" height="40" fill={theme.color.black[400]} />
        <Button component={<UserIcon />} width="44" height="44" />
      </S.HeaderContainer>
    </div>
  );
};

export default Header;
