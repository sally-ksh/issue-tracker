import { IssueType } from "@/apis/type";
import ListLayout from "@/components/common/ListLayout";
import IssueListContent from "@/components/IssueList/IssueListContent";
import IssueListFilter from "@/components/IssueList/IssueListFilter";
import IssueListItem from "@/components/IssueList/IssueListItem";
import IssueRedirectOptionBox from "@/components/IssueList/IssueRedirectOptionBox";
import IssueSearchFilter from "@/components/IssueList/IssueSearchFilter";
import * as S from "@/pages/IssueList/style";

const IssueListPage = () => {
  const issueMock: IssueType = {
    issueId: 1,
    issueNumber: 1,
    title: "가나다라",
    content: "가나다라",
    status: "가나다라",
    createdAt: "가나다라",
    milestone: "가나다라",
    label: ["가나다라", "가나다라2"],
    author: "가나다라",
    authorImage: "가나다라",
  };

  const issueListData = [issueMock, issueMock];

  const ListComponents = issueListData?.map((issueInfo) => {
    return <IssueListItem key={issueInfo.issueId} {...issueInfo} />;
  });

  return (
    <>
      <S.IssueNavContainer>
        <IssueSearchFilter />
        <IssueRedirectOptionBox />
      </S.IssueNavContainer>
      <S.IssueSearchFilterPopUp />

      <S.IssueListContainer>
        <ListLayout width={1280} titleComponent={<IssueListFilter />} listComponents={ListComponents} />
      </S.IssueListContainer>
    </>
  );
};

export default IssueListPage;
