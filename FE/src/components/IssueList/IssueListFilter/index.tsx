import DropdownMenu from "@/components/common/DropdownMenu";
import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueListFilter = () => {
  const IssueFilterAssigneeListTemplate = ["담당자가 없는 이슈, Oni, Daniel"];
  // const IssueFilterAssigneeListComponents = IssueFilterAssigneeListTemplate?.map((list, idx) => {
  //   const handleClickFilter = () => {};

  //   return (
  //     // <S.IssueFilterList key={idx} onClick={handleClickFilter}>
  //     //   <span>{list}</span>
  //     //   <Icon type="emptyRadioButton" />
  //     // </S.IssueFilterList>
  //   );
  // });

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
        {/* <DropdownMenu
          buttonComponent={
            <>
              <span>담당자</span>
              <Icon type="arrowDown" />
            </>
          }
          titleComponent={<S.Title>담당자 필터</S.Title>}
          listComponents={IssueFilterAssigneeListComponents}
          dropdownWidth={240}
          buttonWidth={128}
        /> */}
        <FilterButton text="담당자" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
        <FilterButton text="레이블" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
        <FilterButton text="마일스톤" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
        <FilterButton text="작성자" svgIcon={<Icon type="arrowDown" />} fontWeight={FONTWEIGHT.bold} />
      </S.FilterBox>
    </S.IssueListFilter>
  );
};

export default IssueListFilter;
