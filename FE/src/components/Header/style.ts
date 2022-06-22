import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30rem 0;
`;

type LogoProps = {
  image: string;
};

export const Logo = styled.h1<LogoProps>`
  width: 199rem;
  height: 40rem;

  ${({ image }) =>
    image &&
    css`
      background: url(${image}) no-repeat;
    `};
`;
