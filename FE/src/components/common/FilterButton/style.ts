import styled, { css } from "styled-components";

import { FilterButtonProps } from "@/components/common/FilterButton";
import { COLOR, FONT_SIZE, FONT_WEIGHT } from "@/styles/theme";

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
      background-color: ${COLOR[backgroundColor]};
    `}

  span {
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
  }

  span + span {
    font-weight: ${FONT_WEIGHT.base};
  }

  img {
    background: url(${(props) => props.image}) no-repeat;
    // TODO 재사용성 고려..
  }
`;
