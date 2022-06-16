import styled, { css } from "styled-components";

import { FilterButtonProps } from "@/components/common/FilterButton";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

export const FilterButton = styled.button<FilterButtonProps>`
  span {
    ${({ fontSize }) =>
      fontSize &&
      css`
        font-size: ${FONT_SIZE[fontSize]};
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
  }

  img {
    width: ${(props) => `${props.width}rem`};
    height: ${(props) => `${props.height}rem`};
    background: url(${(props) => props.image}) no-repeat;
    background-size: ${(props) => `${props.width}rem`} ${(props) => `${props.height}rem`};
  }
`;
