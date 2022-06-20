import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLOR["gray-500"]};
  border-radius: 11rem;
  width: 600rem;
  height: 40rem;
  background-color: transparent;
  overflow: hidden;
`;

export const FilterRightContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 472rem;
  padding-left: 26rem;
  gap: 10rem;
  border-left: 1rem solid ${COLOR["gray-500"]};
  background-color: ${COLOR["gray-400"]};
`;

export const OptionTab = styled.div`
  display: flex;
  border: 1rem solid ${COLOR["gray-500"]};
  border-radius: 11rem;

  button + button {
    border-left: 1rem solid ${COLOR["gray-500"]};
    border-radius: 0rem;
  }
`;

export const IssueNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IssueSearchFilterPopUp = styled.div``;

export const IssueListContainer = styled.div`
  width: 100%;
  min-height: 100rem;
  margin-top: 24rem;
  border: 1rem solid ${COLOR["gray-500"]};
  border-radius: 16rem;

  > div {
    border-bottom: 1rem solid ${COLOR["gray-500"]};
    border-top-left-radius: 16rem;
    border-top-right-radius: 16rem;
  }

  li:last-child {
    border-bottom-left-radius: 16rem;
    border-bottom-right-radius: 16rem;
  }

  li + li {
    border-top: 1rem solid ${COLOR["gray-500"]};
  }
`;

export const IssueListFilter = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 18rem 54rem 18rem 32rem;
  background-color: ${COLOR["gray-100"]};
`;

export const IssueListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16rem 54rem 16rem 32rem;
  background-color: ${COLOR["white-400"]};
`;

export const CheckBoxContainer = styled.div`
  margin-right: 33rem;
`;

export const FilterBox = styled.div`
  margin-left: auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const IssueTitle = styled.div``;
export const IssueInfo = styled.div``;
