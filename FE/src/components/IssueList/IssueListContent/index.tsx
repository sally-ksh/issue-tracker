import { useQueryClient, useMutation, useQuery } from "react-query";

import API from "@/apis";
import { IssueType, PatchIssueStatusType } from "@/apis/type";
import ListLayout from "@/components/common/ListLayout";
import IssueListFilter from "@/components/IssueList/IssueListContent/IssueListFilter";
import IssueListItem from "@/components/IssueList/IssueListContent/IssueListItem";

import * as S from "./style";

const IssueListContent = () => {
  // const queryClient = useQueryClient();

  // const { data: issueList } = useQuery(["issues"], API.getIssueList);

  // console.log("issueList :>> ", issueList);

  // const { data, mutate } = useMutation(API.patchIssueStatus, {
  //   onSuccess() {
  //     queryClient.invalidateQueries(["issues"]);
  //   },
  // });

  // console.log("editIssueList :>> ", data);

  // const handleEditIssueList = ({ issueId, status }: PatchIssueStatusType) => {
  //   mutate({
  //     issueId: issueId,
  //     status: status,
  //   });
  // };

  // return (
  //   <ul>
  //     {/* <button onClick={() => handleEditIssueList({ issueId: [1, 2], status: "OPEN" })}>수정하기</button> */}
  //     {issueList?.data.map((issueInfo: IssueType) => (
  //       <IssueListItem key={issueInfo.issueId} {...issueInfo} />
  //     ))}
  //   </ul>
  // );

  const issueMock: IssueType = {
    issueId: 1,
    issueNumber: 1,
    title: "가나다라",
    content: "가나다라",
    status: "가나다라",
    createdAt: "2022-06-23 22:05:22",
    milestone: "가나다라",
    label: ["가나다라", "가나다라2"],
    author: "가나다라",
    authorImage: "가나다라",
  };

  const issueListData = [issueMock, issueMock];

  const IssueListComponents = issueListData?.map((issueInfo) => {
    return <IssueListItem key={issueInfo.issueId} {...issueInfo} />;
  });

  return (
    <S.Container>
      <ListLayout width={1280} titleComponent={<IssueListFilter />} listComponents={IssueListComponents} />;
    </S.Container>
  );
};

export default IssueListContent;
