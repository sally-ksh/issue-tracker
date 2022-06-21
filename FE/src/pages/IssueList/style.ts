import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

export const IssueNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IssueListContainer = styled.div`
  width: 100%;
  min-height: 100rem;
  margin-top: 24rem;
  border: 1rem solid ${COLOR["gray-500"]};
  border-radius: 16rem;
  overflow: hidden;

  > div {
    border-bottom: 1rem solid ${COLOR["gray-500"]};
  }

  li:last-child {
  }

  li + li {
    border-top: 1rem solid ${COLOR["gray-500"]};
  }
`;

export const IssueSearchFilterPopUp = styled.div``;
