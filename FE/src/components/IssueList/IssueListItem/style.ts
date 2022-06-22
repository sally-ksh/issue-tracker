import styled, { css } from "styled-components";

import CheckBox from "@/components/common/CheckBox";
import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

export const IssueListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16rem 54rem 16rem 32rem;
  background-color: ${COLOR["white-400"]};
  height: 100rem;
`;

export const IssueCheckBox = styled(CheckBox)`
  margin-top: 7rem;
  margin-right: 33rem;
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

export const UserIcon = styled.img`
  margin-left: auto;
  width: 20rem;
  height: 20rem;
  border: 1rem solid ${COLOR["gray-900"]};
  border-radius: 50%;
`;
