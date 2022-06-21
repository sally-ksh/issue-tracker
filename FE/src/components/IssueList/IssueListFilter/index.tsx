import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueListFilter = () => {
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
        style={{ marginLeft: "24rem", filter: "contrast(30%)" }}
      />
      <S.FilterBox>끝</S.FilterBox>
    </S.IssueListFilter>
  );
};

export default IssueListFilter;
