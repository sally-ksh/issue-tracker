import { useMemo } from "react";

import { IssueType } from "@/apis/type";
import Icon from "@/components/common/Icon";
import Label from "@/components/common/Label";
import { COLOR } from "@/styles/constTheme";
import { getDifferenceTodayToSelectTime } from "@/utils";

import * as S from "./style";

const IssueListItem = (issueInfo: IssueType) => {
  const { issueNumber, title, createdAt, milestone, label, author, authorImage } = issueInfo;

  const timeStampInfoTemplate = useMemo(() => {
    return `이 이슈가 ${getDifferenceTodayToSelectTime(createdAt)}, ${author}님에 의해 작성되었습니다`;
  }, [author, createdAt]);

  return (
    <S.IssueListItem>
      <S.IssueCheckBox />
      <S.ContentBox>
        <S.IssueHeader>
          <Icon type="alertCircle" color={COLOR["blue-400"]} fill={COLOR["blue-100"]} />
          <S.IssueTitle>{title}</S.IssueTitle>
          {label?.map((name) => (
            <Label key={name} name={name} backgroundColor={COLOR["blue-700"]} />
          ))}
        </S.IssueHeader>
        <S.IssueInfo>
          <span>#{issueNumber}</span>
          <span>{timeStampInfoTemplate}</span>
          <span>
            <Icon type="milestone" width={15} height={16} />
            {milestone}
          </span>
        </S.IssueInfo>
      </S.ContentBox>
      {/* FIXME Account Image */}
      <S.UserIcon src={authorImage} />
    </S.IssueListItem>
  );
};
export default IssueListItem;
