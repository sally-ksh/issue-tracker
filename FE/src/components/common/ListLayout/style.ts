import styled from "styled-components";

import { ListLayoutProps } from "@/components/common/ListLayout";
import { COLOR } from "@/styles/constTheme";

export const ListLayout = styled.div<ListLayoutProps>`
  border: 1rem solid ${COLOR["gray-500"]};
  border-radius: 16rem;
  width: ${(props) => (props.width ? `${props.width}px` : "240px")};
  overflow: hidden;

  > div:first-child {
    background-color: ${COLOR["gray-100"]};
  }

  div:last-child {
    border: none;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLOR["gray-500"]};
  padding: 15px;
  background-color: ${COLOR["white-400"]};
`;
