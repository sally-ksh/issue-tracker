import styled from "styled-components";

import { ImageButtonProps } from "@/components/common/ImageButton/index";

export const ImageButton = styled.button<ImageButtonProps>`
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  background: url(${(props) => props.image}) no-repeat;
`;
