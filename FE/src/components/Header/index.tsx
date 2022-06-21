import Logo from "@/assets/Logo.svg";
import UserIcon from "@/assets/UserIcon.svg";
import * as S from "@/components/Header/style";

const Header = () => {
  return (
    <div>
      <S.HeaderContainer>
        <S.Logo image={Logo} />
        <img src={UserIcon} width={44} height={44} />
      </S.HeaderContainer>
    </div>
  );
};

export default Header;
