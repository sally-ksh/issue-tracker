import Logo from "@/assets/Logo.svg";
import UserIcon from "@/assets/UserIcon.svg";
import ImageButton from "@/components/common/ImageButton";
import * as S from "@/components/Header/style";

const Header = () => {
  return (
    <div>
      <S.HeaderContainer>
        <ImageButton image={Logo} width="199" height="40" />
        <ImageButton image={UserIcon} width="44" height="44" />
      </S.HeaderContainer>
    </div>
  );
};

export default Header;
