import styled from "styled-components";

import CheckBox from "@/components/common/CheckBox";

export const IssueListFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18rem 30rem 18rem 32rem;
  height: 64rem;
`;

export const IssueCheckBox = styled(CheckBox)`
  margin-right: 33rem;
  margin-left: 17rem;
`;

export const FilterBox = styled.div`
  display: flex;
  gap: 36rem;
  margin-left: auto;
  margin-right: 30rem;
`;
