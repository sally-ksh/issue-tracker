import { useQuery, useQueryClient, useMutation } from "react-query";

import API from "@/apis";
import { IssueType, PatchIssueStatusType } from "@/apis/type";
import IssueListItem from "@/components/IssueList/IssueListItem";

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
  // const handleEditIssueList = async ({ issueId, status }: PatchIssueStatusType) => {
  //   mutate({
  //     issueId: issueId,
  //     status: status,
  //   });
  // };
  // return (
  //   <ul>
  //     <button onClick={() => handleEditIssueList({ issueId: [1, 2], status: "OPEN" })}>수정하기</button>
  //     {issueList?.data.map((issueInfo: IssueType) => (
  //       <IssueListItem key={issueInfo.issueId} {...issueInfo} />
  //     ))}
  //   </ul>
  // );

  const issueMock: IssueType = {
    issueId: 1,
    issueNumber: 2,
    title: "abc",
    content: "abc",
    status: "abc",
    creationDateTime: "시간",
    milestone: "abc",
    label: ["abc", "abc"],
    writerName: "abc",
    writerImage: "https://avatars.githubusercontent.com/u/72546335?v=4",
  };

  return (
    <ul>
      <IssueListItem {...issueMock} />
      <IssueListItem {...issueMock} />
    </ul>
  );
};

export default IssueListContent;
