import Icon from "@/components/common/Icon";
import { COLOR } from "@/styles/constTheme";

import * as S from "./style";

const IssueListItem = () => {
  return (
    <S.IssueListItem>
      <S.IssueCheckBox />
      <S.ContentBox>
        <S.IssueTitle>qwe q</S.IssueTitle>
        <S.IssueInfo>룰루랄라</S.IssueInfo>
      </S.ContentBox>
      {/* FIXME Account Image */}
      <Icon type="userIcon" color={COLOR["black-400"]} />
    </S.IssueListItem>
  );
};
export default IssueListItem;
