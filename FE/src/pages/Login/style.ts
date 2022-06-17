import styled from "styled-components";

import { COLOR, FONT_SIZE } from "@/styles/theme";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    color: ${COLOR.gray[900]};
    font-size: ${FONT_SIZE.M};
  }
`;

export const GitHubLoginButton = styled.button`
  width: 340rem;
  height: 64rem;
  border-radius: 20rem;
  background-color: ${COLOR.black[400]};
  margin: 60rem 0 24rem 0;
  color: ${COLOR.white[400]};
  font-size: ${FONT_SIZE.L};
`;

export const LoginIdInput = styled.input`
  width: 340rem;
  height: 64rem;
  border-radius: 20rem;
  border: none;
  background-color: ${COLOR.gray[400]};
  margin-top: 24rem;
  padding-left: 25rem;
  color: ${COLOR.gray[700]};
  font-size: ${FONT_SIZE.L};
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  width: 340rem;
  height: 64rem;
  border-radius: 20rem;
  background-color: ${COLOR.blue[400]};
  margin: 24rem;
  color: ${COLOR.white[400]};
  font-size: ${FONT_SIZE.L};
`;
