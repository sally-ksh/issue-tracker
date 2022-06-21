import styled from "styled-components";

import CheckBox from "@/components/common/CheckBox";
import { COLOR } from "@/styles/constTheme";

export const IssueListFilter = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 18rem 54rem 18rem 32rem;
  background-color: ${COLOR["gray-100"]};
`;

export const IssueCheckBox = styled(CheckBox)`
  margin-right: 33rem;
`;

export const FilterBox = styled.div`
  margin-left: auto;
`;
