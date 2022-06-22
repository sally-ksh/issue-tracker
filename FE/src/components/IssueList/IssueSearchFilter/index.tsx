import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import InputBox from "@/components/common/InputBox";
import { COLOR, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueSearchFilter = () => {
  return (
    <S.FilterContainer>
      <FilterButton
        text="필터"
        svgIcon={<Icon type="arrowDown" />}
        width={128}
        height={40}
        fontWeight={FONTWEIGHT.bold}
        color={COLOR["gray-700"]}
        style={{ justifyContent: "space-evenly" }}
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
