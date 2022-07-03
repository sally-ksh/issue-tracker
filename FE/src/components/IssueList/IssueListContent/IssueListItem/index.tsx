import { IssueType } from "@/apis/type";
import Icon from "@/components/common/Icon";
import Label from "@/components/common/Label";
import { COLOR } from "@/styles/constTheme";
import { timeStampInfoTemplate } from "@/utils";

import * as S from "./style";

const IssueListItem = (issueInfo: IssueType) => {
  const { issueNumber, issueTitle, createdAt, milestoneTitle, labels, author, authorImage } = issueInfo;

  return (
    <S.IssueListItem>
      <S.IssueCheckBox />
      <S.ContentBox>
        <S.IssueHeader>
          <Icon type="alertCircle" strokecolor={COLOR["blue-400"]} />
          <S.IssueTitle>{issueTitle}</S.IssueTitle>
          {labels?.map(({ name, backgroundColor }) => (
            <Label key={name} name={name} backgroundColor={backgroundColor} />
          ))}
        </S.IssueHeader>
        <S.IssueInfo>
          <span>#{issueNumber}</span>
          <span>{timeStampInfoTemplate(createdAt, author)}</span>
          <span>
            <Icon type="milestone" />
            {milestoneTitle}
          </span>
        </S.IssueInfo>
      </S.ContentBox>
      <S.UserIcon src={authorImage} />
    </S.IssueListItem>
  );
};
export default IssueListItem;
