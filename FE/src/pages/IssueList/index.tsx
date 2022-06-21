import IssueListContent from "@/components/IssueList/IssueListContent";
import IssueListFilter from "@/components/IssueList/IssueListFilter";
import IssueRedirectOptionBox from "@/components/IssueList/IssueRedirectOptionBox";
import IssueSearchFilter from "@/components/IssueList/IssueSearchFilter";
import * as S from "@/pages/IssueList/style";

const IssueListPage = () => {
  return (
    <>
      <S.IssueNavContainer>
        <IssueSearchFilter />
        <IssueRedirectOptionBox />
      </S.IssueNavContainer>

      <S.IssueSearchFilterPopUp />

      <S.IssueListContainer>
        <IssueListFilter />
        <IssueListContent />
      </S.IssueListContainer>
    </>
  );
};

export default IssueListPage;
