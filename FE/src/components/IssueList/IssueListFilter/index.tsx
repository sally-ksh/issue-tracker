import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueListFilter = () => {
  // TODO logic: checkbox 클릭 시 변경 filter 박스 변경
  return (
    <S.IssueListFilter>
      <S.IssueCheckBox />
      <FilterButton
        text="열린 이슈"
        state="(2)"
        isIconFirst={true}
        svgIcon={<Icon type="alertCircle" />}
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
        <FilterButton text="담당자" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
        <FilterButton text="레이블" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
        <FilterButton text="마일스톤" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
        <FilterButton text="담당자" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
      </S.FilterBox>
    </S.IssueListFilter>
  );
};

export default IssueListFilter;
