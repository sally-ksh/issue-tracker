import styled, { css } from "styled-components";

import { InputBoxProps } from "@/components/common/InputBox/index";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const InputBox = styled.input<InputBoxProps>`
  ::placeholder {
    color: ${COLOR["gray-700"]};
  }

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${FONT_SIZE[fontSize]}rem;
    `}

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${FONT_WEIGHT[fontWeight]};
    `}

    ${({ color }) =>
    color &&
    css`
      color: ${COLOR[color]};
    `}
`;
