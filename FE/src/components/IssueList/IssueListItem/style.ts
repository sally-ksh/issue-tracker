import styled from "styled-components";

import CheckBox from "@/components/common/CheckBox";
import { COLOR } from "@/styles/constTheme";

export const IssueListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16rem 54rem 16rem 32rem;
  background-color: ${COLOR["white-400"]};
`;

export const IssueCheckBox = styled(CheckBox)`
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
