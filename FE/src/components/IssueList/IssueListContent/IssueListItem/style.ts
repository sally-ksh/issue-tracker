import styled, { css } from "styled-components";

import { AccountImg } from "@/components/common/AccountImg";
import CheckBox from "@/components/common/CheckBox";
import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

export const IssueListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${COLOR["white-400"]};
  height: 100rem;
`;

export const IssueCheckBox = styled(CheckBox)`
  align-self: flex-start;
  margin-top: 11rem;
  margin-right: 33rem;
  margin-left: 17rem;
`;

export const FilterBox = styled.div`
  margin-left: auto;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;

export const IssueHeader = styled.div`
  display: flex;
  align-items: center;
  height: 28rem;
  gap: 8rem;
`;
export const IssueTitle = styled.h3`
  font-size: ${FONTSIZE.L}rem;
  font-weight: ${FONTWEIGHT.bold};
`;
export const IssueInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16rem;

  span {
    svg {
      margin-right: 8rem;
    }
    color: ${COLOR["gray-900"]};
  }
`;

export const UserIcon = styled(AccountImg)`
  margin-left: auto;
  margin-right: 30rem;
`;
