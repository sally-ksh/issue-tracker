import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import AssigneeFilter from "@/components/IssueList/IssueListContent/IssueListFilter/AssigneeFilter";
import LabelFilter from "@/components/IssueList/IssueListContent/IssueListFilter/LabelFilter";
import MilestoneFilter from "@/components/IssueList/IssueListContent/IssueListFilter/MilestoneFilter";
import WriterFilter from "@/components/IssueList/IssueListContent/IssueListFilter/WriterFilter";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueListFilter = () => {
  // 전체체크박스
  return (
    <S.IssueListFilter>
      <S.IssueCheckBox />
      <FilterButton
        text="열린 이슈"
        state="(2)"
        isIconFirst={true}
        svgIcon={<Icon type="alertCircle" strokecolor={COLOR["black-400"]} />}
        color={COLOR["black-400"]}
        fontWeight={FONTWEIGHT.bold}
      />
      <FilterButton
        text="닫힌 이슈"
        state="(4)"
        isIconFirst={true}
        svgIcon={<Icon type="archive" />}
        fontWeight={FONTWEIGHT.bold}
        style={{ marginLeft: "24rem" }}
      />
      <S.FilterBox>
        <AssigneeFilter />
        <LabelFilter />
        <MilestoneFilter />
        <WriterFilter />
      </S.FilterBox>
    </S.IssueListFilter>
  );
};

export default IssueListFilter;
