import styled, { css } from "styled-components";

import { InputBoxProps } from "@/components/common/InputBox/index";
import { COLOR } from "@/styles/constTheme";
import { styledFont } from "@/utils/style";

export const InputBox = styled.input<InputBoxProps>`
  ::placeholder {
    color: ${COLOR["gray-700"]};
  }

  ${({ fontSize, fontWeight, color }) =>
    css`
      ${styledFont({ fontSize: fontSize, fontWeight: fontWeight, color: color })}
    `}
`;
