import { IssueType } from "@/apis/type";
import { COLOR } from "@/styles/constTheme";

import * as S from "./style";

const IssueListItem = (issueInfo: IssueType) => {
  const { issueId, issueNumber, title, content, status, creationDateTime, milestone, label, writerName, writerImage } =
    issueInfo;
  return (
    <S.IssueListItem>
      <S.IssueCheckBox />
      <S.ContentBox>
        <S.IssueTitle>qwe q</S.IssueTitle>
        <S.IssueInfo>룰루랄라</S.IssueInfo>
      </S.ContentBox>
      {/* FIXME Account Image */}
      <img src={writerImage} width={20} height={20} />
    </S.IssueListItem>
  );
};
export default IssueListItem;
