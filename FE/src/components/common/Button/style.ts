import styled from "styled-components";

import { ButtonProps } from "@/components/common/Button";
import { COLOR } from "@/styles/constTheme";

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "120px")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "12px")};
  background-color: ${(props) =>
    props.backgroundColor === "white" ? `${COLOR[`white-400`]}` : `${COLOR["blue-400"]}`};
  color: ${(props) => (props.color === "blue" ? `${COLOR["blue-400"]}` : `${COLOR["white-400"]}`)};
  padding: 10rem;
  border-radius: 10rem;
  border: 1px solid ${COLOR["blue-400"]};
`;
