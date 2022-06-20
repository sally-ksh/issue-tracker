import { useState } from "react";

import { NavLink } from "react-router-dom";

import Logo from "@/assets/Logo.svg";
import ImageButton from "@/components/common/ImageButton";
import * as S from "@/pages/Login/style";

const LoginPage = () => {
  const [loginIdInfo, setLoginIdInfo] = useState(null);
  const [loginPwInfo, setLoginPwInfo] = useState(null);

  const changeLoginIdState = (event: any) => setLoginIdInfo(event.target.value);
  const changeLoginPwState = (event: any) => setLoginPwInfo(event.target.value);

  return (
    <S.LoginContainer>
      <ImageButton image={Logo} width={342} height={72} />
      <S.GitHubLoginButton>GitHub 계정으로 로그인</S.GitHubLoginButton>
      <span>or</span>
      <S.LoginIdInput placeholder="아이디" type="text" onChange={changeLoginIdState} />
      <S.LoginIdInput placeholder="비밀번호" type="password" onChange={changeLoginPwState} />
      <S.LoginButton>
        <NavLink to="/">아이디로 로그인</NavLink>
      </S.LoginButton>
      <button>회원가입</button>
    </S.LoginContainer>
  );
};

export default LoginPage;
