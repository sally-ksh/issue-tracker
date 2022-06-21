import styled from "styled-components";

import CheckBox from "@/components/common/CheckBox";
import { COLOR } from "@/styles/constTheme";

export const IssueListFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18rem 30rem 18rem 32rem;
  background-color: ${COLOR["gray-100"]};
  height: 64rem;
`;

export const IssueCheckBox = styled(CheckBox)`
  margin-right: 33rem;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 36rem;
  margin-left: auto;
`;
