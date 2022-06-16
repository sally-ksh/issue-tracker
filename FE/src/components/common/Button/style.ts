import styled from "styled-components";

import { ButtonProps } from "@/components/common/Button/index";

export const ButtonBox = styled.button<ButtonProps>`
  svg {
    fill: ${(props) => (props.fill ? `${props.fill}` : "inherit")};
    width: ${(props) => `${props.width}rem`};
    height: ${(props) => `${props.height}rem`};
  }
`;
