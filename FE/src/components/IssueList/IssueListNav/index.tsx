import IssueRedirectOptionBox from "@/components/IssueList/IssueListNav/IssueRedirectOptionBox";
import IssueSearchFilter from "@/components/IssueList/IssueListNav/IssueSearchFilter";

import * as S from "./style";

const IssueListNav = () => {
  return (
    <S.IssueNavContainer>
      <IssueSearchFilter />
      <IssueRedirectOptionBox />
    </S.IssueNavContainer>
  );
};

export default IssueListNav;
