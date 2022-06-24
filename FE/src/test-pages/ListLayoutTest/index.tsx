import { IssueType } from "@/apis/type";
import ListLayout from "@/components/common/ListLayout";
import IssueListItem from "@/components/IssueList/IssueListContent/IssueListItem";
import * as S from "@/test-pages/ListLayoutTest/style";

const ListLayoutTest = () => {
  const dataFromServer = ["ListLayout", "ListLayout", "ListLayout", "ListLayout"];

  const issueMock: IssueType = {
    issueId: 1,
    issueNumber: 1,
    issueTitle: "가나다라",
    content: "가나다라",
    issueStatus: "가나다라",
    createdAt: "가나다라",
    milestoneTitle: "가나다라",
    labels: [
      {
        name: "FE",
        backgroundColor: "#ff0000",
        fontColor: "BRIGHT",
      },
      {
        name: "feature",
        backgroundColor: "#ffa500",
        fontColor: "DARK",
      },
    ],
    author: "가나다라",
    authorImage: "가나다라",
  };

  const dataFromServerMock = [issueMock, issueMock];

  const TitleComponent = (
    <S.ListTitleBox>
      <input type="checkbox" />
      <span>dd</span>
    </S.ListTitleBox>
  );

  const ListComponents = dataFromServerMock?.map((el, idx) => {
    return <IssueListItem key={idx} {...el} />;
  });

  return (
    <>
      <h1>ListLayout Test page</h1>
      <br />
      <ListLayout width={1280} titleComponent={TitleComponent} listComponents={ListComponents} />
    </>
  );
};

export default ListLayoutTest;
