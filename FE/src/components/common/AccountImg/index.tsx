import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

type AccountImgProps = { src: string };

export const AccountImg = styled.img<AccountImgProps>`
  background: url(${(props) => props.src});
  width: 20rem;
  height: 20rem;
  border: 1rem solid ${COLOR["gray-500"]};
  border-radius: 50%;
`;
