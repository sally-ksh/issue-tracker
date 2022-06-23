import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import InputBox from "@/components/common/InputBox";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import DropdownMenu from "../../common/DropdownMenu/index";

import * as S from "./style";

const IssueSearchFilter = () => {
  const issueFilterListTemplate = [
    "열린 이슈",
    "내가 작성한 이슈",
    "나에게 할당된 이슈",
    "내가 댓글을 남긴 이슈",
    "닫힌 이슈",
  ];

  const IssueFilterListComponents = issueFilterListTemplate?.map((list, idx) => {
    const handleClickFilter = () => {};

    return (
      <S.IssueFilterList key={idx} onClick={handleClickFilter}>
        <span>{list}</span>
        <Icon type="alertCircle" />
        <Icon type="emptyRadioButton" />
      </S.IssueFilterList>
    );
  });

  return (
    <S.FilterContainer>
      <DropdownMenu
        buttonComponent={
          <S.Test>
            <span>필터</span>
            <Icon type="arrowDown" />
          </S.Test>
        }
        titleComponent={<S.Title>이슈 필터</S.Title>}
        listComponents={IssueFilterListComponents}
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
