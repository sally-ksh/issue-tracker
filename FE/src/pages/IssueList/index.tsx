import { useState } from "react";

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
import InputBox from "@/components/common/InputBox";
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
  return (
    <S.FilterContainer>
      <ClickButton
        text="필터"
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
