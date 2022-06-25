import IssueListContent from "@/components/IssueList/IssueListContent";
import IssueListNav from "@/components/IssueList/IssueListNav";
import IssueRedirectOptionBox from "@/components/IssueList/IssueListNav/IssueRedirectOptionBox";
import IssueSearchFilter from "@/components/IssueList/IssueListNav/IssueSearchFilter";
import * as S from "@/pages/IssueList/style";

const IssueListPage = () => {
  return (
    <S.Container>
      <IssueListNav />
      <IssueListContent />
    </S.Container>
  );
};

export default IssueListPage;
