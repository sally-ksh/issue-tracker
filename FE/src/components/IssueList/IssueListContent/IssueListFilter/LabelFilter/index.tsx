import { useState } from "react";

import DropdownMenu from "@/components/common/DropdownMenu";
import Icon from "@/components/common/Icon";

import * as S from "./style";

const LabelFilter = () => {
  const [issueFilter, setIssueFilter] = useState(null);

  const FilterListTemplate = [
    { name: "레이블이 없는 이슈" },
    { name: "feature", backgroundColor: "#2f69dd" },
    { name: "bug", backgroundColor: "#dc4a4a" },
  ];

  const FilterButton = (
    <>
      <span>레이블</span>
      <Icon type="arrowDown" />
    </>
  );

  const FilterTitle = <S.FilterTitle>레이블 필터</S.FilterTitle>;

  const FilterListComponents = FilterListTemplate?.map(({ name, backgroundColor }, idx) => {
    const handleClickFilter = () => {};

    return (
      <S.FilterList key={idx} onClick={handleClickFilter}>
        <S.FrontBox>
          {backgroundColor && <Icon type="colorCircle" fillcolor={backgroundColor} />}
          <span>{name}</span>
        </S.FrontBox>
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

export default LabelFilter;
