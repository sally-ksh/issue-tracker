import { IssueType } from "@/apis/type";
import ListLayout from "@/components/common/ListLayout";
import IssueListItem from "@/components/IssueList/IssueListItem";
import * as S from "@/test-pages/ListLayoutTest/style";

const ListLayoutTest = () => {
  const dataFromServer = ["ListLayout", "ListLayout", "ListLayout", "ListLayout"];

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
