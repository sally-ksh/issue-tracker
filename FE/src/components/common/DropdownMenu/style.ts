import styled, { css } from "styled-components";

import { FONTSIZE } from "@/styles/constTheme";

type DropdownMenuBoxProps = {
  isVisible?: boolean;
  isBtnOnLeftSide?: boolean;
};

export const DropdownMenuBox = styled.div`
  position: relative;
`;

export const DropdownMenuBtn = styled.button`
  display: flex;
  font-size: ${FONTSIZE.L}rem;
`;

export const DropdownMenuListBox = styled.div<DropdownMenuBoxProps>`
  position: absolute;
  top: 20rem;
  left: ${(props) => (props.isBtnOnLeftSide ? "0rem" : "null")};
  right: ${(props) => (props.isBtnOnLeftSide ? "null" : "0rem")};
  max-height: ${(props) => (props.isVisible ? "500rem" : "0px")};
  overflow: hidden;
  width: 240rem;
  z-index: 1;
`;
