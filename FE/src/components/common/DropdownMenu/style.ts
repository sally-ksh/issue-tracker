import styled, { css } from "styled-components";

import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

import type { DropdownMenuProps } from "@/components/common/DropdownMenu";

type DropdownMenuBoxProps = {
  isVisible?: boolean;
  isBtnOnLeftSide?: boolean;
};

export const DropdownMenuBox = styled.div`
  position: relative;
  height: auto;
`;

export const DropdownMenuBtn = styled.button<Pick<DropdownMenuProps, "buttonWidth">>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${FONTSIZE.L}rem;
  color: ${COLOR["gray-900"]};
  font-weight: ${FONTWEIGHT.bold};
  height: auto;

  ${({ buttonWidth }) =>
    buttonWidth &&
    css`
      width: ${buttonWidth}rem;
    `}
`;

export const DropdownMenuListBox = styled.div<DropdownMenuBoxProps>`
  position: absolute;
  top: 40rem;
  left: ${(props) => (props.isBtnOnLeftSide ? "0rem" : "null")};
  right: ${(props) => (props.isBtnOnLeftSide ? "null" : "0rem")};
  max-height: ${(props) => (props.isVisible ? "500rem" : "0px")};
  overflow: hidden;
  width: 240rem;
  z-index: 10;
  transition: all 0.1s ease-in-out;
`;
