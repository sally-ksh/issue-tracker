import styled from "styled-components";

export const Input = styled.input`
  cursor: pointer;
  transform: scale(1.2);
  filter: opacity(0.3);

  :checked {
    filter: opacity(1);
  }
`;
