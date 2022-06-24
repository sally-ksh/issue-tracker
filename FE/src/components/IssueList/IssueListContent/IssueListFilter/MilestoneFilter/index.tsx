import { useState } from "react";

import DropdownMenu from "@/components/common/DropdownMenu";
import Icon from "@/components/common/Icon";

import * as S from "./style";

const MilestoneFilter = () => {
  const [issueFilter, setIssueFilter] = useState(null);

  const FilterListTemplate = [{ name: "마일스톤 없는 이슈" }, { name: "마스터즈 코스" }];

  const FilterButton = (
    <>
      <span>마일스톤</span>
      <Icon type="arrowDown" />
    </>
  );

  const FilterTitle = <S.FilterTitle>마일스톤 필터</S.FilterTitle>;

  const FilterListComponents = FilterListTemplate?.map(({ name }, idx) => {
    const handleClickFilter = () => {};

    return (
      <S.FilterList key={idx} onClick={handleClickFilter}>
        <span>{name}</span>
        {issueFilter ? <Icon type="checkRadioButton" /> : <Icon type="emptyRadioButton" />}
      </S.FilterList>
    );
  });

  return (
    <DropdownMenu
      buttonComponent={FilterButton}
      titleComponent={FilterTitle}
      listComponents={FilterListComponents}
      buttonWidth={80}
      dropdownWidth={240}
    />
  );
};

export default MilestoneFilter;
