import styled from "styled-components";

import { ButtonProps } from "@/components/common/Button";
import { COLOR } from "@/styles/constTheme";

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  width: ${(props) => (props.width ? `${props.width}rem` : "120rem")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : "12rem")};
  background-color: ${(props) =>
    props.backgroundColor === "white" ? `${COLOR[`white-400`]}` : `${COLOR["blue-400"]}`};
  color: ${(props) => (props.color === "blue" ? `${COLOR["blue-400"]}` : `${COLOR["white-400"]}`)};
  padding: 10rem;
  border-radius: 10rem;
  border: 1rem solid ${COLOR["blue-400"]};
`;
