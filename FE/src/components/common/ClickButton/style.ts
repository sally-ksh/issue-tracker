import styled, { css } from "styled-components";

import { ClickButtonProps } from "@/components/common/ClickButton";
import { styledFont } from "@/utils/style";

export const ClickButton = styled.button<ClickButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8rem;
  gap: 8rem;

  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  span {
    ${({ fontSize, fontWeight, color }) =>
      css`
        ${styledFont({ fontSize: fontSize, fontWeight: fontWeight, color: color })}
      `}
  }
`;
