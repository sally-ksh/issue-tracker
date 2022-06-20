import { ReactComponent as AlertCircle } from "@/assets/AlertCircle.svg";
import { ReactComponent as Archive } from "@/assets/Archive.svg";
import { ReactComponent as ArrowDown } from "@/assets/ArrowDown.svg";
import { ReactComponent as Label } from "@/assets/Label.svg";
import { ReactComponent as Milestone } from "@/assets/Milestone.svg";
import { ReactComponent as Plus } from "@/assets/Plus.svg";
import { ReactComponent as SearchIcon } from "@/assets/SearchIcon.svg";
import { ReactComponent as UserIcon } from "@/assets/UserIcon.svg";
import CheckBox from "@/components/common/CheckBox";
import ClickButton from "@/components/common/ClickButton";
import Dropdown from "@/components/common/Dropdown";
import InputBox from "@/components/common/InputBox";
import LoadingProgress from "@/components/common/LoadingProgress";
import * as S from "@/pages/IssueList/style";
import { FONTWEIGHT, COLOR, FONTSIZE } from "@/styles/constTheme";

const IssueListPage = () => {
  return (
    <>
      <S.IssueNavContainer>
        <IssueSearchFilter />
        <IssueRedirectOptionBox />
      </S.IssueNavContainer>

      <S.IssueSearchFilterPopUp />

      <S.IssueListContainer>
        <IssueListFilter />
        <ul>
          <IssueListItem />
          <IssueListItem />
          <IssueListItem />
        </ul>
      </S.IssueListContainer>
    </>
  );
};

const IssueListFilter = () => {
  return (
    <S.IssueListFilter>
      <S.CheckBoxContainer>
        <CheckBox />
      </S.CheckBoxContainer>
      <ClickButton
        text="열린 이슈"
        state="(2)"
        isIconFirst={true}
        svgIcon={<AlertCircle stroke={COLOR["black-400"]} />}
        color={COLOR["black-400"]}
        fontWeight={FONTWEIGHT.bold}
      />
      <ClickButton
        text="닫힌 이슈"
        state="(4)"
        isIconFirst={true}
        svgIcon={<Archive stroke={COLOR["black-400"]} />}
        fontWeight={FONTWEIGHT.bold}
        style={{ marginLeft: "24rem", filter: "contrast(30%)" }}
      />
      <S.FilterBox>끝</S.FilterBox>
    </S.IssueListFilter>
  );
};

const IssueListItem = () => {
  return (
    <S.IssueListItem>
      <S.CheckBoxContainer>
        <CheckBox />
      </S.CheckBoxContainer>
      <S.ContentBox>
        <S.IssueTitle>qwe q</S.IssueTitle>
        <S.IssueInfo>룰루랄라</S.IssueInfo>
      </S.ContentBox>
      {/* FIXME Account Image */}
      <UserIcon width={20} height={20} style={{ marginLeft: "auto" }} />
    </S.IssueListItem>
  );
};

const IssueSearchFilter = () => {
  const handleToggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const X = e.currentTarget.clientWidth;
    const Y = e.currentTarget.clientHeight;
    const 해당위치x = e.currentTarget.offsetLeft;
    const 해당위치y = e.currentTarget.offsetTop;
    const 해당위치width = e.currentTarget.offsetWidth;
    const 해당위치height = e.currentTarget.offsetHeight;
    console.log("X,Y :>> ", X, Y);
    console.log("해당위치x :>> ", 해당위치x);
    console.log("해당위치y :>> ", 해당위치y);
    console.log("해당위치width :>> ", 해당위치width);
    console.log("해당위치height :>> ", 해당위치height);
    const 해당타겟데이터 = e.currentTarget.getBoundingClientRect();
    console.log("해당타겟데이터 :>> ", 해당타겟데이터);
  };

  const 테스트 = () => {
    console.log("클릭");
  };
  return (
    <S.FilterContainer>
      <ClickButton
        text="필터"
        // onClick={handleToggleDropdown}
        onClick={테스트}
        svgIcon={<ArrowDown />}
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
        <ClickButton
          text="레이블"
          svgIcon={<Label />}
          isIconFirst={true}
          width={160}
          height={40}
          fontWeight={FONTWEIGHT.bold}
          color={COLOR["gray-900"]}
          state={"(3)"}
        />
        <ClickButton
          text="마일스톤"
          svgIcon={<Milestone />}
          isIconFirst={true}
          width={160}
          height={40}
          fontWeight={FONTWEIGHT.bold}
          color={COLOR["gray-900"]}
          state={"(3)"}
        />
      </S.OptionTab>
      <ClickButton
        text="이슈작성"
        svgIcon={<Plus />}
        fontSize={FONTSIZE.XS}
        isIconFirst={true}
        width={120}
        height={40}
        backgroundColor={COLOR["blue-400"]}
        color={COLOR["white-400"]}
        style={{ justifyContent: "center", gap: "9rem" }}
      />
    </S.FilterRightContainer>
  );
};

export default IssueListPage;
