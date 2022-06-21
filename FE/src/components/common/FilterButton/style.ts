import styled, { css } from "styled-components";

import { FilterButtonProps } from "@/components/common/FilterButton";
import { COLOR } from "@/styles/constTheme";
import { styledFont } from "@/utils/style";

export const FilterButton = styled.button<FilterButtonProps>`
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

  svg {
    stroke: ${({ color }) => (color ? color : COLOR["gray-900"])};
  }
`;
