import ArrowDown from "@/assets/ArrowDown.svg";
import Label from "@/assets/Label.svg";
import Milestone from "@/assets/Milestone.svg";
import Plus from "@/assets/Plus.svg";
import { ReactComponent as SearchIcon } from "@/assets/SearchIcon.svg";
import FilterButton from "@/components/common/FilterButton";
import InputBox from "@/components/common/InputBox";
import * as S from "@/pages/IssueList/style";
import { FONTWEIGHT, COLOR, FONTSIZE } from "@/styles/constTheme";

const IssueList = () => {
  return (
    <>
      <S.NavContainer>
        <IssueSearchFilter />
        <IssueRedirectOptionBox />
      </S.NavContainer>
      <S.IssueSearchFilterPopUp />
      <div className="IssueListContent"></div>
    </>
  );
};

const IssueSearchFilter = () => {
  return (
    <S.FilterContainer>
      <FilterButton
        text="필터"
        image={ArrowDown}
        width={128}
        height={40}
        fontWeight={FONTWEIGHT.bold}
        color={COLOR["gray-700"]}
        style={{ justifyContent: "space-evenly" }}
      />
      <S.InputContainer>
        <SearchIcon />
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

const IssueRedirectOptionBox = () => {
  return (
    <S.FilterRightContainer>
      <S.OptionTab>
        <FilterButton
          text="레이블"
          image={Label}
          isImageFirst={true}
          width={160}
          height={40}
          fontWeight={FONTWEIGHT.bold}
          color={COLOR["gray-900"]}
          state={"(3)"}
        />
        <FilterButton
          text="마일스톤"
          image={Milestone}
          isImageFirst={true}
          width={160}
          height={40}
          fontWeight={FONTWEIGHT.bold}
          color={COLOR["gray-900"]}
          state={"(3)"}
        />
      </S.OptionTab>
      <FilterButton
        text="이슈작성"
        fontSize={FONTSIZE.XS}
        image={Plus}
        width={120}
        height={40}
        isImageFirst={true}
        backgroundColor={COLOR["blue-400"]}
        color={COLOR["white-400"]}
        style={{ justifyContent: "center", gap: "9rem" }}
      />
    </S.FilterRightContainer>
  );
};

export default IssueList;
