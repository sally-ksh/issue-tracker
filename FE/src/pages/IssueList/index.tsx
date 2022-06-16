import ArrowDown from "@/assets/ArrowDown.svg";
import FilterButton from "@/components/common/FilterButton";
import * as S from "@/pages/IssueList/style";

const IssueList = () => {
  return (
    <>
      <S.FilterContainer>
        <S.FilterOptionButton></S.FilterOptionButton>
        <FilterButton text="필터" image={ArrowDown} width="20" height="20" />
        <S.FilterInput defaultValue="필터 인풋" />
      </S.FilterContainer>
      <S.FilterOptionPopUp />
    </>
  );
};

export default IssueList;
