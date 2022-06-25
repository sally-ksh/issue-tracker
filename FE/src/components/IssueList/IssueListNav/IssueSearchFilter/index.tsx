import { useState } from "react";

import DropdownMenu from "@/components/common/DropdownMenu/index";
import Icon from "@/components/common/Icon";
import InputBox from "@/components/common/InputBox";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueSearchFilter = () => {
  const [issueFilter, setIssueFilter] = useState(null);

  const FilterListTemplate = [
    "열린 이슈",
    "내가 작성한 이슈",
    "나에게 할당된 이슈",
    "내가 댓글을 남긴 이슈",
    "닫힌 이슈",
  ];

  const FilterButton = (
    <>
      <span>필터</span>
      <Icon type="arrowDown" />
    </>
  );

  const FilterTitle = <S.FilterTitle>이슈 필터</S.FilterTitle>;

  const FilterListComponents = FilterListTemplate?.map((list, idx) => {
    const handleClickFilter = () => {};

    return (
      <S.FilterList key={idx} onClick={handleClickFilter}>
        <span>{list}</span>
        {issueFilter ? <Icon type="checkRadioButton" /> : <Icon type="emptyRadioButton" />}
      </S.FilterList>
    );
  });

  return (
    <S.FilterContainer>
      <DropdownMenu
        buttonComponent={FilterButton}
        titleComponent={FilterTitle}
        listComponents={FilterListComponents}
        buttonWidth={128}
        dropdownWidth={240}
      />
      <S.InputContainer>
        <Icon type="searchIcon" />
        <InputBox
          defaultValue="is:issue is:open"
          placeholder="Search all issues"
          color={COLOR["gray-700"]}
          maxLength={50}
          size={40}
        />
      </S.InputContainer>
    </S.FilterContainer>
  );
};

export default IssueSearchFilter;
