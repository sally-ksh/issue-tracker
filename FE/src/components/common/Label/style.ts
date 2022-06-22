import styled, { css } from "styled-components";

import { LabelProps } from "@/components/common/Label";
import { FONTSIZE } from "@/styles/constTheme";
import { getTextColorByBackgroundColor } from "@/utils";

export const Label = styled.div<Partial<LabelProps>>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${FONTSIZE.XS}rem;
  font-weight: 500;
  padding: 8rem 16rem;
  border-radius: 30rem;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      color: ${getTextColorByBackgroundColor(backgroundColor)};
      background-color: ${backgroundColor};
    `}
`;
