import styled from "styled-components";

import { ListLayoutProps } from "@/components/common/ListLayout";
import { COLOR } from "@/styles/constTheme";

export const ListLayout = styled.div<ListLayoutProps>`
  border: 1rem solid ${COLOR["gray-500"]};
  border-radius: 16rem;
  width: ${(props) => (props.width ? `${props.width}px` : "240px")};

  > div:first-child {
    background-color: ${COLOR["gray-100"]};
    border-top-left-radius: 16rem;
    border-top-right-radius: 16rem;
    border-bottom: 1px solid ${COLOR["gray-500"]};
    padding: 15rem;
  }

  li:last-child {
    border: none;
    border-bottom-left-radius: 16rem;
    border-bottom-right-radius: 16rem;
  }

  li {
    width: 100%;
    border-bottom: 1px solid ${COLOR["gray-500"]};
    background-color: ${COLOR["white-400"]};
    padding: 15rem;

    :hover {
      cursor: pointer;
      background-color: ${COLOR["gray-100"]};
    }

    :active {
      background-color: ${COLOR["gray-400"]};
    }
  }
`;
