import { ReactComponent as ArrowDown } from "@/assets/ArrowDown.svg";
import * as S from "@/pages/IssueList/style";

const IssueList = () => {
  return (
    <>
      <S.FilterContainer>
        <S.FilterOptionButton>
          필터 <ArrowDown />
        </S.FilterOptionButton>
        <S.FilterInput defaultValue="필터 인풋" />
      </S.FilterContainer>
      <S.FilterOptionPopUp />
    </>
  );
};

export default IssueList;
