import styled, { css } from "styled-components";

import { FilterButtonProps } from "@/components/common/FilterButton";
import { FONTWEIGHT } from "@/styles/constTheme";
import { styledFont } from "@/utils/style";

export const FilterButton = styled.button<FilterButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11rem;
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

  span + span {
    font-weight: ${FONTWEIGHT.base};
  }

  img {
    background: url(${(props) => props.image}) no-repeat;
    // TODO 재사용성 고려..
  }
`;
