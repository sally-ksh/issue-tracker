import { IssueType } from "@/apis/type";
import Icon from "@/components/common/Icon";
import Label from "@/components/common/Label";
import { COLOR } from "@/styles/constTheme";
import { getDifferenceTodayToSelectTime, timeStampInfoTemplate } from "@/utils";

import * as S from "./style";

const IssueListItem = (issueInfo: IssueType) => {
  const { issueNumber, title, createdAt, milestone, label, author, authorImage } = issueInfo;

  return (
    <S.IssueListItem>
      <S.IssueCheckBox />
      <S.ContentBox>
        <S.IssueHeader>
          <Icon type="alertCircle" strokecolor={COLOR["blue-400"]} />
          <S.IssueTitle>{title}</S.IssueTitle>
          {label?.map((name) => (
            <Label key={name} name={name} backgroundColor={COLOR["blue-700"]} />
          ))}
        </S.IssueHeader>
        <S.IssueInfo>
          <span>#{issueNumber}</span>
          <span>{timeStampInfoTemplate(createdAt, author)}</span>
          <span>
            <Icon type="milestone" />
            {milestone}
          </span>
        </S.IssueInfo>
      </S.ContentBox>
      <S.UserIcon src={authorImage} />
    </S.IssueListItem>
  );
};
export default IssueListItem;
